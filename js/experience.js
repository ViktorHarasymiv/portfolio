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
    MoongoDB :"mongoDB.png"
}

const skillsValueExp = Object.values(skillsExp);

const experience = [
    { 
        type: 'Education',
        institution: 'Self-study',
        period: 'November 2021 - Present',
        technical: 'Frontend Developer',
        about: 'I have gone through a lot of material and self-study courses. I have a lot of practice in HTML, CSS, JS, REACT, REACT REDUX',
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4] , skillsValue[6] , skillsValue[7] ]
    },
    { 
        period: 'November 2024 - Present',
        type: 'Education',
        institution: 'GoIT - start your career in IT',
        technical: 'Full Stack Developer',
        about: 'Junior Fullstack Developer з повним циклом створення сучасних вебсайтів та вебзастосунків з нуля за 10 місяців',
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4] , skillsValue[6] , skillsValue[7] ]
    },
    { 
        type: 'Work',
        institution: 'Freelance',
        period: 'September 2022 - Present',
        technical: 'Web Developer',
        about: 'Website development. Fixing layout bugs. Writing simple scripts.',
        skills: [skillsValue[0] , skillsValue[1] , skillsValue[2] , skillsValue[3], skillsValue[4] , skillsValue[6] , skillsValue[7] ]
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
    <div class="experience--period"><span>${item.period}</span></div>
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
