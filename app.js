navList = document.querySelector('.nav-list');
hamBurger = document.querySelector('.hamburger');
navLink = document.querySelector('.nav-link');

hamBurger.addEventListener('click', function(){
    
    hamBurger.classList.toggle('show')
    navList.classList.toggle('show')
})


