const experienceFragment = document.querySelector('.experience--box');

/*  Skills array  */

const skillsExp = {
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

const skillsValueExp = Object.values(skillsExp);


const experience = [
    { 
        type: 'Education',
        institution: 'Self-study',
        period: 'November 2021 - Present',
        technical: 'Frontend Developer',
        about: 'I have gone through a lot of material and self-study courses. I have a lot of practice in HTML, CSS, JS, REACT, REACT REDUX',
        skills: [skillsValueExp[0] , skillsValueExp[1] , skillsValueExp[2] , skillsValueExp[3], skillsValueExp[4] , skillsValueExp[6] ]
    },
    { 
        period: 'November 2024 - Present',
        type: 'Education',
        institution: 'GoIT - start your career in IT',
        technical: 'Full Stack Developer',
        about: 'Junior Fullstack Developer з повним циклом створення сучасних вебсайтів та вебзастосунків з нуля за 10 місяців',
        skills: [skillsValueExp[0] , skillsValueExp[1] , skillsValueExp[2] , skillsValueExp[3], skillsValueExp[4] , skillsValueExp[6] , skillsValueExp[7],  skillsValueExp[8] ]
    },
    { 
        type: 'Work',
        institution: 'Freelance',
        period: 'September 2022 - Present',
        technical: 'Web Developer',
        about: 'Website development. Fixing layout bugs. Writing simple scripts.',
        skills: [skillsValueExp[0] , skillsValueExp[1] , skillsValueExp[2] , skillsValueExp[3], skillsValueExp[4] , skillsValueExp[6] ,  skillsValueExp[8] ]
    }
]

// Створюємо фрагмент
let fragment = document.createElement('ul');
fragment.classList.add('experience--list');

function createExperienceList() {

experience.forEach(item => {

    let experienceContent = document.createElement('li');
    experienceContent.classList.add('experience--item');

    experienceContent.innerHTML = 
    `
    <span class="experience--period">${item.period}</span>
    <span class="experience--type">${item.type}</span>
    <h4 class="experience--institution">${item.institution}</h4>
    <span class="experience--technical">${item.technical}</span>
    <p class="experience--paragraph">${item.about}</p>
    <ul class="experience--skills_list">
    ${item.skills
        .map(skill =>
       `<li class="portfolio--item_link"><img src="icons/${skill}" width="22px" height="22px" class="portfolio--item_skill" /></li>`)
        .join('')}
    </ul>
    `
    
    fragment.appendChild(experienceContent);
})

experienceFragment.appendChild(fragment);
};


/* Initial */ 

createExperienceList();
