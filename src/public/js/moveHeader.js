   /* move header
    * -------------------------------------------------- */
   
   const ssMoveHeader = function () {

    const hdr = document.querySelector('.header');
    const hero = document.querySelector('#intro--section');

    const mobileNav = document.querySelector('.header_modal--navigation');

    let triggerHeight;

    if (!(hdr && hero)) return;

    setTimeout(function() {
        triggerHeight = hero.offsetHeight - 170;
    }, 300);

    window.addEventListener('scroll', function () {

        let loc = window.scrollY;

        if (loc > triggerHeight) {
            hdr.classList.add('sticky');
            mobileNav.classList.add('fix--mobile_nav');
        } else {
            hdr.classList.remove('sticky');
            mobileNav.classList.remove('fix--mobile_nav');
        }

        if (loc > triggerHeight + 20) {
            hdr.classList.add('offset');
        } else {
            hdr.classList.remove('offset');
        }

        if (loc > triggerHeight + 150) {
            hdr.classList.add('scrolling');
        } else {
            hdr.classList.remove('scrolling');
        }

    });

}; // end ssMoveHeader


   /* Initialize
    * ------------------------------------------------------ */
   (function ssInit() {
    ssMoveHeader();
})(document.documentElement);