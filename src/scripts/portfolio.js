const galleryBox = document.querySelector('#portfolio--section');
const PortfolioListBox = document.querySelector('.portfolio--list');

const targetImg = document.querySelector('.portfolio--item_previewScreen');

/*  Skills array  */

const skills = {
  HTML: 'html.svg',
  CSS: 'cssIco.png',
  JS: 'js.svg',
  React: 'react.png',
  Redux: 'redux.svg',
  TypeScript: 'typescript.svg',
  Figma: 'figma.svg',
  MoongoDB: 'mongoDB.png',
  GitHub: 'github.png',
  SASS: 'sass-ico.png',
  Versel: 'Vercel.svg',
  Mui: 'mui.png',
  NextJs: 'nextjs.svg',
  Tailwind: 'icons-tailwind.png',
};

const skillsValue = Object.values(skills);

/* Portfolio array */

const contentArray = [
  {
    id: 0,
    previewScreen: 'future-tech-app_prev.png',
    fullImage: 'future-tech-app_FULL.png',
    data: 'February 2025',
    title: 'FutureTech',
    url: 'https://viktorharasymiv.github.io/future-tech-app/',
    alt: 'Future Tech App',
    type: 'Self work',
    role: 'Full-Stack Developer',
    about:
      'Many complex components were implemented in the project: credit calculators, multi-stage mortgage application forms, asynchronous filter of bank services, custom maps (REST API YandexMap) with ATMs and office points.',
    skills: [
      skillsValue[0],
      skillsValue[9],
      skillsValue[2],
      skillsValue[8],
      skillsValue[6],
    ],
  },
  {
    id: 1,
    previewScreen: 'ApiFront.jpg',
    fullImage: 'ApiBack.png',
    data: 'March 2025',
    title: 'Api servise',
    url: 'https://goit-react-hw-04-ten-vert.vercel.app/',
    alt: 'Api servise',
    type: 'Self work',
    role: 'Full-Stack Developer',
    about:
      'The service is developed in React JS, an image liking system and informative modal windows have been added, and a registration system has been added to improve the UI.<br/> <b>API servise Unsplash</b>',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[2],
      skillsValue[3],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 2,
    previewScreen: 'DB_front.png',
    fullImage: 'DB_front.png',
    data: 'April 2025',
    title: 'Movie DB Servise',
    url: 'https://mdb-ruddy.vercel.app/',
    alt: 'Api servise',
    type: 'Self work',
    role: 'Full-Stack Developer',
    about:
      'The service is developed in React JS, an image liking system and informative modal windows have been added, and a registration system has been added to improve the UI.<br/> <b>API servise TMDB</b>',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[2],
      skillsValue[3],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 3,
    previewScreen: 'CREATEX_WEAR.jpg',
    fullImage: 'CREATEX_WEAR.jpg',
    data: 'April 2025',
    title: 'Prototype Wear Shop',
    url: 'https://createx-eight.vercel.app/',
    alt: 'Shop',
    type: 'Self work',
    role: 'Full-Stack Developer',
    about:
      'Sell clothes online, Provide a convenient platform forbrowsing, selecting and purchasing clothes from variouscategories: women`s, men`s, children`s, sport`s, etc. - Increase trust and customer engagement thanks to high-quality UX/UI, customer reviews, product ratings, returnguarantee and secure payment.',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[2],
      skillsValue[3],
      skillsValue[4],
      skillsValue[11],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 4,
    previewScreen: 'teamProject.jpg',
    fullImage: 'FULL-teamProject.png',
    data: 'May 2025',
    title: 'Portfolio prototype',
    url: 'https://viktorharasymiv.github.io/code-questers/',
    alt: 'Prototype',
    type: 'Collaboration work',
    role: 'Teamlead',
    about:
      'The primary goal is to create a unique user experience thatstands out among traditional portfolios and captures theattention of potential employers and collaborators. Thewebsite functions as an interactive résumé, combininginformative content with a creative presentation.',
    skills: [skillsValue[0], skillsValue[1], skillsValue[2], skillsValue[8]],
  },
  {
    id: 5,
    previewScreen: 'next-portfolio-omega.png',
    fullImage: 'Full-next-portfolio-omega.png',
    data: 'June 2025',
    title: 'Dynamic Web Magic with Next.js',
    url: 'https://next-portfolio-omega-woad.vercel.app/',
    alt: 'Prototype',
    type: 'Self work',
    role: 'Full-stack Developer',
    about:
      'The primary goal is to create a unique user experience thatstands out among traditional portfolios and captures theattention of potential employers and collaborators. Thewebsite functions as an interactive résumé, combininginformative content with a creative presentation.',
    skills: [skillsValue[12], skillsValue[13], skillsValue[8], skillsValue[10]],
  },
  {
    id: 6,
    previewScreen: 'parallax.png',
    fullImage: 'parallax.png',
    data: 'June 2025',
    title: 'Natural Forest',
    url: 'https://parallax-3d-lens-effect.vercel.app/',
    alt: 'Parallax Effect',
    type: 'Private project',
    role: 'Full-stack Developer',
    about:
      'Educational project for practicing and mastering the parallax effect on full-page applications. Demonstrate skills and understanding of working with cursor behavior and dynamic element positioning.',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[2],
      skillsValue[3],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 7,
    previewScreen: 'Pregnancy-Journey.png',
    fullImage: 'Pregnancy-Journey.png',
    data: 'September 2025',
    title: 'Pregnancy Journey App',
    url: 'https://gitpub-frontend.vercel.app/',
    alt: 'Pregnancy Journey',
    type: 'Team work',
    role: 'Teamlead',
    about:
      'Leleka is a convenient app for expectant mothers. It helps track the progress of pregnancy day by day, receive helpful tips, keep a personal journal, and manage tasks. This project is a secure, full-featured web application built with a modern JavaScript stack. It includes user registration, authentication, and full CRUD operations over HTTPS, with persistent data storage in MongoDB and session management via cookies.',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[12],
      skillsValue[5],
      skillsValue[7],
      skillsValue[11],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 8,
    previewScreen: 'camper.jpg',
    fullImage: 'camper-full.png',
    data: 'October 2025',
    title: 'TravelTrack App',
    url: 'https://camper-nine.vercel.app/',
    alt: 'TravelTrack',
    type: 'Private project',
    role: 'Full Stack Developer',
    about:
      'Camper Nine is a modern web application that allows users to browse, compare, and book camper vans for travel across Ukraine. Each vehicle is presented with a detailed description, pricing, user rating, photo gallery, and a list of amenities such as air conditioning, kitchen, bathroom, and television.',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[12],
      skillsValue[5],
      skillsValue[7],
      skillsValue[11],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 9,
    previewScreen: 'databasepf.png',
    fullImage: 'databasepf.png',
    data: 'October 2025',
    title: 'Admin panel for Plus Fit App',
    url: 'https://plusfit-club-dashboard.vercel.app/',
    alt: 'Admin panel',
    type: 'Private project',
    role: 'Full Stack Developer',
    about:
      'A functional and secure admin dashboard built with Node.js, designed to manage the backend infrastructure of the Plus Fit web application. The panel provides full CRUD capabilities, media resource management, and real-time handling of user invitations and notifications',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[12],
      skillsValue[5],
      skillsValue[7],
      skillsValue[11],
      skillsValue[8],
      skillsValue[10],
    ],
  },
  {
    id: 10,
    previewScreen: 'plusfit.png',
    fullImage: 'plusfit-club-full.png',
    data: 'October 2025',
    title: 'Plus Fit Web Page',
    url: 'https://plusfit-club-nmf7.vercel.app/',
    alt: 'Admin panel',
    type: 'Commercial (freelance) project',
    role: 'Full Stack Developer',
    about:
      'A functional and secure admin dashboard built with Node.js, designed to manage the backend infrastructure of the Plus Fit web application. The panel provides full CRUD capabilities, media resource management, and real-time handling of user invitations and notifications',
    skills: [
      skillsValue[0],
      skillsValue[1],
      skillsValue[12],
      skillsValue[5],
      skillsValue[7],
      skillsValue[11],
      skillsValue[8],
      skillsValue[10],
    ],
  },
];

/* Function for mark up list item to portfolio */

function createItem() {
  let markup = contentArray
    .reverse()
    .map(
      (elem, key) =>
        `<li id="${key}"  class="portfolio--item swiper-slide">
              <div onclick="showFullScreenImg(event)" class="portfolio--item_previewScreen">
                 <img src="image/portfolio/${elem.previewScreen}" data-id="${
          elem.fullImage
        }" width="351" height="230"/>
              </div>
              <div class="portfolio--item_content">
                 <span class="portfolio--item_data">${elem.data}</span>
                 <a href=${
                   elem.url
                 } target="_blank"><h4 class="portfolio--item_title">${
          elem.title
        }</h4></a>
                 <h4>${elem.role}</h4>
                  <p>${elem.type}</p>
                 <p class="portfolio--item_about">${elem.about}</p>
                 <ul class="portfolio--item_icons_list">
                   ${elem.skills
                     .map(
                       skill =>
                         `<li class="portfolio--item_link"><img src="icons/${skill}" width="20px" height="20px" class="portfolio--item_skill" /></li>`
                     )
                     .join('')}
                 </ul>
            </li>`
    )
    .join('');

  PortfolioListBox.insertAdjacentHTML('beforeend', markup);
}

window.showFullScreenImg = function (event) {
  event.preventDefault();

  const previewScreenItem = event.target;

  const imageData = event.target.dataset;

  const existingModal = document.querySelector('.portfolio--modal');

  if (previewScreenItem.nodeName !== 'IMG') {
    return;
  }

  document.body.classList.add('lock-scroll');

  const markUpScreen = `
            <div class="portfolio--modal">
              <button onClick="closeModal()" class="close_modal">
            </button>

            <div class="portfolio--overlay">
            <div class="image_scroll_box">
              <img onClick="closeModal()" src="image/portfolio/${imageData.id}" class="portfolio--overlay_image"/>
              <div class="scroll_animate">
              <img src="https://img.icons8.com/?size=100&id=37223&format=png&color=000000" width="24px" height="24px"/>
              </div>
              </div>
            </div>
                                 `;

  if (existingModal) {
    existingModal.remove();
  }

  galleryBox.insertAdjacentHTML('beforeend', markUpScreen);
};

window.closeModal = function () {
  const modal = document.querySelector('.portfolio--modal');

  if (modal) {
    document.body.classList.remove('lock-scroll');
    modal.remove();
  }
};

/* Initial function */

window.addEventListener('load', () => {
  createItem();
});
