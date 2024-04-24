/=========== toggle icon navbar ================/
let menuIcon = document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
 
/=========== scroll section avtive link ================/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
/===================== sticky navbar ==================/
let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

/=========== remove toggle icon and navbar when click navbar link (scroll) ================/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


/===================== scroll reveal ==================/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.logo', { origin: 'left' });
ScrollReveal().reveal('.navbar', { origin: 'right' });
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-contact', { origin: 'right' });


  const scriptURL = 'https://script.google.com/macros/s/AKfycbzaP03pQoedL2IFtdbcwfMlSydfmQo2cj-1RAaSfxi1dl8u_uLJ0M3yUeswNY4OCyou1A/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Send Successfully...!"
        setTimeout(function() {
            msg.innerHTML = ""
      },30000)
      form.reset()
      .catch(error => console.error('Error!', error.message))
  })
})