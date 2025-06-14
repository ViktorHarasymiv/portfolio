const hardSkills = [
  'HTML (HTML5)',
  'CSS (CSS3), SASS (SCSS), Clsx',
  'JavaScript (ES6+, OOP), React, NextJs, TypeScript',
  'Redux',
  'Redux, React Hook Form, Axios, React Router, React Query, Formik',
  'Vite, Gulp',
  'REST API',
  'BEM, Accessibility, UX',
  'Git (GitHub), Vercel',
  'Figma, Adobe Photoshop',
  'Basic understanding PHP',
];

const softSkills = [
  'Agile, SCRUM',
  'English level - A2',
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
