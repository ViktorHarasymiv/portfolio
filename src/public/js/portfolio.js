const galleryBox = document.querySelector('#portfolio--section');
const addChildetoPortfolio = document.querySelector('.portfolio--list');

const targetImg = document.querySelector('.portfolio--item_previewScreen');

/*  Skills array  */
const skills = {
    HTML : "html.svg",
    CSS : "cssIco.png",
    JS : "node-js.svg",
    React :"react.png",
    Redux: "redux.svg",
    TypeScript : "typescript.svg",
    Figma : "figma.svg",
    MoongoDB :"mongoDB.png",
    GitHub: "github.png",
}

const skillsValue = Object.values(skills);

/* Portfolio array */

const portfolioItems = [
    [{
        id: 0,
        previewScreen: "futureTech.jpg",
        data: "December 2024",
        title: "FutureTech",
        url : "https://viktorharasymiv.github.io/future-tech-app/",
        alt : "https://viktorharasymiv.github.io/createX/",
        fullImage : "futureTech.jpg",
        about: "Many complex components were implemented in the project: credit calculators, multi-stage mortgage application forms, asynchronous filter of bank services, custom maps (REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4] , skillsValue[6] , skillsValue[7] , skillsValue[8] ]
    
    }],

    [{
        id: 1,
        previewScreen: "createx.jpg",
        data: "December 2024",
        title: "Createx",
        url : "https://viktorharasymiv.github.io/createX/",
        alt : "https://viktorharasymiv.github.io/createX/",
        fullImage : "createxFullScreen.jpg",
        about: "Many complex components were implemented in the project: credit calculators, multi-stage mortgage application forms, asynchronous filter of bank services, custom maps (REST API YandexMap) with ATMs and office points.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4] , skillsValue[6] , skillsValue[7] , skillsValue[8] ]
    
    }],

    [{
        id: 2,
        previewScreen: "interno.jpg",
        data: "September 2024",
        title: "Interno",
        url : "https://intterno.netlify.app/",
        alt : "Interno",
        fullImage : "intterno.netlify.app_.jpg",
        about: "Minimalistic,based on SPA with integration of several technologies: Vite, TypeScript, React, React Router, Redux, Redux Toolkit, Redux Persist, Formik, Yup, classNames, PostCSS, Vite SVG icon, Vitest etc.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[3] , skillsValue[6] , skillsValue[8] ] ,
    }],

    [{
        id: 3,
        previewScreen: "lalasiaSmoll.jpg",
        data: "January 2025",
        title: "Discover Furniture",
        url : "https://lalasia-wiktor.netlify.app/",
        alt : "https://lalasia-wiktor.netlify.app/",
        fullImage : "lalasia-wiktor.netlify.app_.jpg",
        about: "Multi-page online store.",
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[3] , skillsValue[4] , skillsValue[6] ,  skillsValue[8] ]  ,
    }]
]

/* Function for mark up list item to portfolio */


function addItems(id) {
    let addPortfolioItem = portfolioItems[id].map(elem =>
        `
        <li class="portfolio--item swiper-slide">
              <a onclick="showFullScreenImg(event, ${id})" href="" class="portfolio--item_previewScreen">
                 <img src="image/${elem.previewScreen}" data-id="${elem.fullImage}" loading="lazy" />
              </a>
              <div class="portfolio--item_content">
                 <span class="portfolio--item_data">${elem.data}</span>
                 <a href=${elem.url} target="_blank"><h4 class="portfolio--item_title">${elem.title}</h4> </a>
                 <p class="portfolio--item_about">${elem.about}</p>
                 <ul class="portfolio--item_icons_list">
                   ${elem.skills
                    .map(skill =>
                   `<li class="portfolio--item_link"><img src="image/icons/${skill}" width="18px" height="18px" class="portfolio--item_skill" loading="lazy" /></li>`)
                    .join('')}
                 </ul>
            </li>
        `).join('')
        
    addChildetoPortfolio.insertAdjacentHTML("beforeend", addPortfolioItem);

    return addPortfolioItem.about;
}

function showFullScreenImg(event) {

    event.preventDefault();

    const previewScreenItem = event.target;
    
    const imageData =  event.target.dataset;

    const existingModal = document.querySelector(".portfolio--modal");
    

    if (previewScreenItem.nodeName !== 'IMG') { return; }

    
  document.body.classList.add('lock-scroll');

            const markUpScreen = `
            <div class="portfolio--modal">
              <button onClick="closeModal()" class="close_modal">
            </button>
            
            <div class="portfolio--overlay">
            <div class="image_scroll_box">
              <img onClick="closeModal()" src="image/${imageData.id}" class="portfolio--overlay_image" loading="lazy"   />
              <div class="scroll_animate">
              <span>
              Scroll Me
              </span>
              <img src="https://img.icons8.com/?size=100&id=37223&format=png&color=000000" width="24px" height="24px"/>
              </div>
              </div>      
            </div>
                                 `

                                

    if (existingModal) {
        existingModal.remove();
    }
    
    galleryBox.insertAdjacentHTML("beforeend", markUpScreen);

}

function closeModal() {
    const modal = document.querySelector(".portfolio--modal");
    
    if (modal) {
        document.body.classList.remove('lock-scroll');
        modal.remove(); 
    }
}


/* Initial function */ 

for(let i = 0; i <= portfolioItems.length - 1; i++ ) {
    addItems(i);
}