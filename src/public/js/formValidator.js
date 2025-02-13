'use strict'

const form = document.querySelector('.contact--form');

form.addEventListener(('submit') , errorAlert);

     function errorAlert(event) {
        event.preventDefault();

        const formData = new FormData(form);
        

        alert(`Дорогий ${formData.get('name').trim()} ,відправка форми буде доступна при вигруженому проекті на хостинг`);
        form.reset();
     }

    // async function formSend(e) {
    //     e.preventDefault();

    //     // let error = formValidate(form);
    //     let formData = new FormData(form);
    //     console.log(formData);

    //         let response = await fetch('sendmail.php' , {
    //             method: 'POST',
    //             body: formData,
    //             mode: 'no-cors'
    //         });
    //         if(response.ok) {
    //             form.reset();
    //         }
    //     }
    // })