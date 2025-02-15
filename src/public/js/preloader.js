    'use strict';

/* preloader
    * -------------------------------------------------- */
(function(html) {
   const ssPreloader = function() {

    const siteBody = document.querySelector('body');
    const preloader = document.querySelector('#preloader');
    if (!preloader) return;

    html.classList.add('ss-preload');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
        html.classList.remove('ss-preload');
        html.classList.add('ss-loaded');
    }, 100); 
        
        preloader.addEventListener('transitionend', function afterTransition(e) {
            if (e.target.matches('#preloader'))  {
                siteBody.classList.add('ss-show');
                e.target.style.display = 'none';
                preloader.removeEventListener(e.type, afterTransition);
            }
        });
    });

}; // end ssPreloader

   /* Initialize
    * ------------------------------------------------------ */
   (function ssInit() {

    ssPreloader();

})();

})(document.documentElement);