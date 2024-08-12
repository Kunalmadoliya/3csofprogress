document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerBox = document.querySelector(".hamburger-box");

 
  

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