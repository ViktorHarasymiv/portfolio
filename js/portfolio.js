const galleryBox = document.querySelector('#portfolio--section');
const addChildetoPortfolio = document.querySelector('.portfolio--list');

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

const portfolioItems = [
  [
    {
      id: '',
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
      skills: [
        skillsValue[12],
        skillsValue[13],
        skillsValue[8],
        skillsValue[10],
      ],
    },
  ],
  [
    {
      id: '',
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
  ],
  [
    {
      id: '',
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
  ],
  [
    {
      id: 0,
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
  ],
  [
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
  ],
  [
    {
      id: 2,
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
  ],
  [
    {
      id: 4,
      previewScreen: 'interno.jpg',
      data: 'September 2024',
      title: 'Interno',
      url: 'https://intterno.netlify.app/',
      alt: 'Interno',
      fullImage: 'intterno.netlify.app_.jpg',
      about:
        'Minimalistic,based on SPA with integration of several technologies: Vite, TypeScript, React, React Router, Redux, Redux Toolkit, Redux Persist, Formik, Yup, classNames, PostCSS, Vite SVG icon, Vitest etc.',
      skills: [
        skillsValue[0],
        skillsValue[1],
        skillsValue[3],
        skillsValue[6],
        skillsValue[8],
      ],
    },
  ],
  [
    {
      id: 5,
      previewScreen: 'lalasiaSmoll.jpg',
      data: 'January 2025',
      title: 'Discover Furniture',
      url: 'https://lalasia-wiktor.netlify.app/',
      alt: 'https://lalasia-wiktor.netlify.app/',
      fullImage: 'lalasia-wiktor.netlify.app_.jpg',
      about: 'Multi-page online store.',
      skills: [
        skillsValue[0],
        skillsValue[1],
        skillsValue[3],
        skillsValue[4],
        skillsValue[6],
        skillsValue[8],
      ],
    },
  ],
];

/* Function for mark up list item to portfolio */

function addItems(id) {
  let addPortfolioItem = portfolioItems[id]
    .map(
      elem =>
        `
        <li class="portfolio--item swiper-slide">
              <a onclick="showFullScreenImg(event, ${id})" href="" class="portfolio--item_previewScreen">
                 <img src="image/${elem.previewScreen}" data-id="${
          elem.fullImage
        }" width="351" height="230" loading="lazy" />
              </a>
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
                         `<li class="portfolio--item_link"><img src="image/icons/${skill}" width="20px" height="20px" class="portfolio--item_skill" /></li>`
                     )
                     .join('')}
                 </ul>
            </li>
        `
    )
    .join('');

  addChildetoPortfolio.insertAdjacentHTML('beforeend', addPortfolioItem);

  return addPortfolioItem.about;
}

function showFullScreenImg(event) {
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
              <img onClick="closeModal()" src="image/${imageData.id}" class="portfolio--overlay_image" loading="lazy"   />
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
}

function closeModal() {
  const modal = document.querySelector('.portfolio--modal');

  if (modal) {
    document.body.classList.remove('lock-scroll');
    modal.remove();
  }
}

/* Initial function */

for (let i = 0; i <= portfolioItems.length - 1; i++) {
  addItems(i);
}
