// 'use strict';

// const linkList = document.querySelector('.header_list');

// function getActiveSection() {
//   linkList.addEventListener('click', function (event) {
//     const linkItem = event.target;
//     console.log(linkItem);
    
//     if (linkItem.nodeName !== 'A') {
//       return;
//     }

//     // Видаляємо клас 'active_link' з усіх посилань
//     const activeLinks = linkList.querySelectorAll('.__active-section');
//     activeLinks.forEach(link => link.classList.remove('__active-section'));

//     // Додаємо клас 'active_link' до поточного посилання
//     linkItem.classList.add('__active-section');
//   });
// }

// // Викликаємо функцію для ініціалізації обробника подій
// getActiveSection();