'use strict'

document.addEventListener('DOMContentLoaded' , function () {

    const form = document.querySelector('.contact--form');

    form.addEventListener('submit' , formSend);

    async function formSend(e) {
        e.preventDefault();

        // let error = formValidate(form);
        let formData = new FormData(form);
        console.log(formData);

            let response = await fetch('sendmail.php' , {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            if(response.ok) {
                form.reset();
            }
        }
    })