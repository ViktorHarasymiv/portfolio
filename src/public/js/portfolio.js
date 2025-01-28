'use strict';

const galleryBox = document.querySelector('#portfolio--section');
const addChildetoPortfolio = document.querySelector('.portfolio--list');

/*  Skills array  */
const skills = {
    HTML : "html.svg",
    CSS : "cssIco.png",
    JS : "node-js.svg",
    React :"react.png",
    Redux: "redux.svg",
}

const skillsValue = Object.values(skills);

/* Portfolio array */

const portfolioItems = [

    [{
        id: 1,
        previewScreen: "createx.jpg",
        data: "December 2024",
        title: "Createx",
        about: "Many complex components were implemented in the project: credit calculators, multi-stage mortgage application forms, asynchronous filter of bank services, custom maps (REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4]]

    }],
    [{
        id: 2,
        previewScreen: "interno.jpg",
        data: "September 2024",
        title: "Interno",
        about: "(REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[3]] ,
    }],
    [{
        id: 3,
        previewScreen: "shop.jpg",
        data: "September 2024",
        title: "Interno",
        about: "(REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[3]] ,
    }]
    
]

/* Function for mark up list item to portfolio */

function addItems(id) {
    let addPortfolioItem = portfolioItems[id].map(elem =>
        `<li class="portfolio--item">
              <a onclick="showFullScreenImg(event, ${id})" href="" class="portfolio--item_previewScreen">
                 <img src="${elem.previewScreen}" data-id="${id}" />
              </a>
              <div class="portfolio--item_content">
                 <span class="portfolio--item_data">${elem.data}</span>
                 <h4 class="portfolio--item_title">${elem.title}</h4>
                 <p class="portfolio--item_about">${elem.about}</p>
                 <ul class="portfolio--item_icons_list">
                   ${elem.skills
                    .map(skill =>
                   `<li class="portfolio--item_link"><img src="icons/${skill}" width="22px" height="22px" class="portfolio--item_skill" /></li>`)
                    .join('')}
                 </ul>
              </div>
            </li>
        `).join('')
        
    addChildetoPortfolio.insertAdjacentHTML("beforeend", addPortfolioItem);

    return addPortfolioItem.about;
}

function showFullScreenImg(event, id) {
    event.preventDefault()
    addChildetoPortfolio.addEventListener('click', (event) =>  {

           const selectedItem = portfolioItems[id][0];
        
        console.log(selectedItem);
        
        const previewScreenItem = event.target;

        if (previewScreenItem.nodeName !== 'IMG') {
            return;
          }
            const markUpScreen = `
            <div class="portfolio--modal">
              <button onClick="closeModal()" class="close_modal">X</button>
                <div class="portfolio--overlay">
                  <img onClick="closeModal()" src="${previewScreenItem.src}" />        
                </div> `

    
    const existingModal = document.querySelector(".portfolio--modal");

    if (existingModal) {
        existingModal.remove();
    }
    
    galleryBox.insertAdjacentHTML("beforeend", markUpScreen);
})
};

function closeModal() {
    const modal = document.querySelector(".portfolio--modal");
    
    if (modal) {
        modal.remove(); 
    }
}




for(let i = 0; i <= portfolioItems.length - 1; i++ ) {
    addItems(i);
}




