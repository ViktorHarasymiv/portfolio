const hardSkills = [
            "HTML (HTML5), EJS, JSX",
            "CSS (CSS3), SASS (SCSS), PostCSS, Bootstrap, Tailwind, Animations",
            "JavaScript (ES6+, OOP), jQuery, TypeScript",
            "React",
            "Redux (Redux Toolkit, Redux Persist), MobX, Zustand",
            "Formik, React Hook Form, Yup, Axios, React Router, React Query",
            "Webpack, Vite, Gulp, Rollup",
            "Jest, React Testing Library, Enzyme, Chai, Mocha, Vitest",
            "REST API, WebSockets, Long Polling",
            "BEM, Feature-Sliced Design, Accessibility, UX",
            "Git (GitHub, BitBucket, GitLab)",
            "Figma, Adobe Photoshop, Avocode",
            "CMS 1C-Bitrix, Drupal, OpenCart, MODX",
            "Basic understanding PHP, Blade, Twig",         
         ]

const softSkills = [
            "I know how to work in a team, I have experience in communication with designers, managers and other developers",
            "I am responsible about deadlines",
            "I am attentive to the details of the terms of reference",
            "I am demanding of the quality of my code, I follow the code-style",
            "I have time management skills",
            "I welcome constructive criticism and am always happy to find new points of professional and personal growth",
            "I know how to solve conflict situations",
            "I am correctly convey thoughts, formulate questions",
            "I write detailed reports on the work done, if required",
            "I have experience working with a geographically distributed team (remote work)",
            "I have experience in mentoring, training of junior specialists",
            "I am motivated to improve my skills, constantly studying new technologies in my field of activity",
            "Agile, Waterfall, SCRUM",
            "Competent written and oral speech",
            "English level - B1"            
         ]


const skillList = document.querySelectorAll('.skill--section_list');

let addHardSkill = hardSkills.map((hard) => 
    `<li class="skill--item">${hard}</li>`)
    .join("");

let addSoftSkill = softSkills.map((soft) => 
    `<li class="skill--item">${soft}</li>`)
    .join("");

skillList[0].insertAdjacentHTML("beforeend", addHardSkill);
skillList[1].insertAdjacentHTML("beforeend", addSoftSkill);