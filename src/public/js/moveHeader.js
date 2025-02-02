   /* move header
    * -------------------------------------------------- */
   
   const ssMoveHeader = function () {

    const hdr = document.querySelector('.header');
    const hero = document.querySelector('#intro--section');

    const mobileNav = document.querySelector('.header_navigation');

    let triggerHeight;

    if (!(hdr && hero)) return;

    setTimeout(function() {
        triggerHeight = hero.offsetHeight - 170;
    }, 300);

    window.addEventListener('scroll', function () {

        let loc = window.scrollY;

        if (loc > triggerHeight) {
            hdr.classList.add('sticky');
        } else {
            hdr.classList.remove('sticky');
        }

        if (loc > triggerHeight + 20) {
            hdr.classList.add('offset');
            mobileNav.classList.add('fix--mobile_nav');
        } else {
            hdr.classList.remove('offset');
        }

        if (loc > triggerHeight + 150) {
            hdr.classList.add('scrolling');
            mobileNav.classList.add('fix--mobile_nav');
        } else {
            hdr.classList.remove('scrolling');
            mobileNav.classList.remove('fix--mobile_nav');
        }

    });

}; // end ssMoveHeader

function openSubNav() {
    const subList = document.querySelector('.works--sub_nav');

    subList.classList.toggle('is-visibile');
    
}

   /* Initialize
    * ------------------------------------------------------ */
   (function ssInit() {
    ssMoveHeader();
})(document.documentElement);