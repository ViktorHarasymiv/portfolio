/* Variables */


/* SETUP ANIMATION */


/* F */

window.onscroll = () => {
    const section = document.querySelectorAll('section');
    const header = document.querySelector('.header');

    let top = window.scrollY;

    section.forEach(local => {
        
    let HedHeight = header.offsetHeight;
    let offset = local.offsetTop - 500;
    let height = local.offsetHeight;

    if (HedHeight > top) {
        header.classList.remove('animate');
    }
    if(top >= offset && top < offset + 550 + height) {
        local.classList.add('show-animation');
    }
    else {
        local.classList.remove('show-animation');
    }
})
}


/*  OTHER  */
