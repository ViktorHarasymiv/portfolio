const section = document.querySelectorAll('section');

window.onscroll = () => {
section.forEach(local => {
    let top = window.scrollY;

    let offset = local.offsetTop;
    let height = local.offsetHeight;

    if(top >= offset && top < offset + height) {
        local.classList.add('show-animation');
    }
    else {
        local.classList.remove('show-animation');
    }
})
}