'use strict';

const galleryBox = document.querySelector('#portfolio--section');
const addChildetoPortfolio = document.querySelector('.portfolio--list');

/*  Skills array  */
const skills = {
    HTML : "./img/icons/html.svg",
    CSS : "https://img.icons8.com/?size=100&id=10236&format=png&color=000000",
    JS : "./img/icons/node-js.svg",
    React :"https://img.icons8.com/?size=100&id=58811&format=png&color=000000",
    Redux: "./img/icons/redux.svg",
}

const skillsValue = Object.values(skills);

/* Portfolio array */

const portfolioItems = [

    [{
        id: 1,
        previewScreen: "./img/portfolio/createx.jpg",
        data: "December 2024",
        title: "Createx",
        about: "Many complex components were implemented in the project: credit calculators, multi-stage mortgage application forms, asynchronous filter of bank services, custom maps (REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4]]

    }],
    [{
        id: 2,
        previewScreen: "./img/portfolio/interno.jpg",
        data: "September 2024",
        title: "Interno",
        about: "(REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[3]] ,
    }],
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
                   `<li class="portfolio--item_link"><img src="${skill}" width="22px" height="22px" class="portfolio--item_skill" /></li>`)
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

addItems(0);
addItems(1);



