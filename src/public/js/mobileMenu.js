'use strict';


function openModal() {

    const menuButton = document.querySelector('.header__menu-toggle');
    const activePanel = document.querySelector('.header_modal--navigation');
    
    menuButton.classList.toggle('is-open');
    activePanel.classList.toggle('is-visible');
    
  }