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