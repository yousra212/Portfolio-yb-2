//Profile Sub_title
let typed = new Typed(".home_subtitle", {
    strings: ["Junior Web Developer", "Junior Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });

//Header Toggle
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(event){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Get all the links in the navigation menu
const navLinks = document.querySelectorAll('nav ul li a');

// For each link, add an event listener to scroll to the corresponding section
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.hash);
    section.scrollIntoView({behavior: 'smooth'});
  });
});

// Active link state on scroll
let sections = document.querySelectorAll('section');
window.addEventListener('scroll', function(){
  const scrollPost = this.window.scrollY
  sections.forEach(section => {
    if(section.offsetTop <= scrollPost && section.offsetTop + section.offsetHeight > scrollPost){
      navLinks.forEach(link => {
        link.classList.remove('active')
        if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
          link.classList.add('active')
        }
      })
    }
  })
});

//Carousel




