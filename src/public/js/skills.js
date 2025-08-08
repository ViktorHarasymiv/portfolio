const hardSkills = [
  'HTML (HTML5)',
  'CSS (CSS3), SCSS, Clsx, CSS module',
  'JS (ES6+, OOP)',
  'React.js, Next.js, TypeScript',
  'State manager (Context Api, Redux Toolkit, Zustang)',
  'React Hooks (state, context, useEffect, useRef, useMemo, useCallBack)',
  'React libraries (Axios, React Query, Formik, Yup, Loader, Tailwind, MUI)',
  'React Router',
  'REST API (Postman , Swagger)',
  'Node.js + Express.js',
  'MongoDB',
  'Vite, Webpack',
  'Git (GitHub), Vercel, render.com',
  'BEM, Kebab-case, snake_case, camelCase',
  'Figma, Adobe Photoshop',
  'Development of adaptive and responsive websites',
];

const softSkills = [
  'Agile, SCRUM',
  'Languages - Ukrainian (native), English (A2)',
  'I am motivated to improve my skills, constantly studying new technologies in my field of activity',
  'I am demanding of the quality of my code, I follow the code-style',
  'I am responsible about deadlines',
  'I have experience in communication with designers, managers and other developers',
  'I am attentive to the details of the terms of reference',
  'I have time management skills',
  'I welcome constructive critic and am always happy to find new points of professional and personal growth',
  'I know how to solve conflict situations',
  'I write detailed reports on the work done, if required',
];

const skillList = document.querySelectorAll('.skill--section_list');

let addHardSkill = hardSkills
  .map(hard => `<li class="skill--item">${hard}</li>`)
  .join('');

let addSoftSkill = softSkills
  .map(soft => `<li class="skill--item">${soft}</li>`)
  .join('');

skillList[0].insertAdjacentHTML('beforeend', addHardSkill);
skillList[1].insertAdjacentHTML('beforeend', addSoftSkill);

/*  Tabs  */

const tabsLink = document.querySelectorAll('.skill--tabs_link');
let line = document.querySelector('.liner');

tabsLink.forEach((tab, index) => {
  tab.addEventListener('click', event => {
    tabsLink.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');

    line.style.width = tab.offsetWidth + 'px';
    line.style.left = tab.offsetLeft + 'px';

    skillList.forEach(content => {
      content.classList.remove('active');
      skillList[index].classList.add('active');
    });
  });
});
