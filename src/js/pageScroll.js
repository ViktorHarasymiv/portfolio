/* highlight active menu link on pagescroll
    * ------------------------------------------------------ */

const ssScrollSpy = function() {

    const sections = document.querySelectorAll('.target_section');
    
    if (!sections) return;

    // Add an event listener listening for scroll
    window.addEventListener('scroll', navHighlight);

    function navHighlight() {
    
        // Get current scroll position
        let scrollY = window.scrollY;
    
        // Loop through sections to get height(including padding and border), 
        // top and ID values for each
        sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.header_navigation a[href*=' + sectionId + ']').parentNode.classList.add('__active-section');
            } else {
                document.querySelector('.header_navigation a[href*=' + sectionId + ']').parentNode.classList.remove('__active-section');
            }
        });
    }

}; // end ssScrollSpy

    ssScrollSpy();
