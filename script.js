document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerBox = document.querySelector(".hamburger-box");

 
  
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
// Toggle the active class when the hamburger icon is clicked
hamburger.addEventListener('click', () => {
    hamburgerBox.classList.toggle('active');
});


    const btn = document.querySelector('.btn button');
const hiddenElements = document.querySelectorAll('.hidden');

btn.addEventListener('click', function() {
  hiddenElements.forEach(function(element) {
    element.classList.add('active');
  });
});

  });