const introText = `I'm Viktor Harasymiv`;
const titleBox = document.querySelector('.intro--title');

let position = 0;


const typeText = () => {
    if(position === introText.length)  {
        titleBox.classList.add('anim-finish');
        return;
    } 

    titleBox.innerHTML += introText[position];

    position++;

    setTimeout(typeText, getRandomInt());
}

function getRandomInt(min = 50, max = 300) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

typeText(); 



