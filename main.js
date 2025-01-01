let header = document.querySelector('.navbar');
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky",window.scrollY > 100)
});

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('ul')

hamburger.addEventListener("click", () => {
  
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
})
let lien1 = document.querySelector('.lien1');
let lien2 = document.querySelector('.lien2');
let lien3 = document.querySelector('.lien3');
let lien4 = document.querySelector('.lien4');
let lien5 = document.querySelector('.lien5');

lien1.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
})


lien2.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
})


lien3.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
})


lien4.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
})

lien5.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
})

    const form = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); 

        const formData = new FormData(form);

        try {
        
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset(); 
                confirmationMessage.style.display = 'block'; 
                errorMessage.style.display = 'none'; 
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
        } catch (error) {
            
            confirmationMessage.style.display = 'none'; 
            errorMessage.style.display = 'block';
        }
    });

ScrollReveal({
   distance : '50px',
   duration : 2500,
   delay : 400,
   opacity : 0,
   reset : true
});
ScrollReveal().reveal('.About-image img,.bbbb,.About-text h2,.competence',{delay : 300,origin : 'left'});

ScrollReveal().reveal('.About-text h1,.skill-img img',{delay : 300,origin : 'right'});


ScrollReveal().reveal('.About-text p,.About-text a',{delay : 300,origin : 'bottom'});

ScrollReveal().reveal('.first,.third',{delay : 100,origin : 'left'});

ScrollReveal().reveal('.second',{delay : 100,origin : 'right'});
