document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelector(".projects");
    const aboutSection = document.querySelector(".about-section");
    const btn = document.querySelector(".btn button"); // Adjusted to select the button inside .btn
    const hiddenElements = document.querySelectorAll(".hidden");
  
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
  
    // Toggle classes for the hamburger menu and sections
    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
      aboutSection.classList.toggle('active')
    });
  
   
    // Show hidden elements when button is clicked
    btn.addEventListener("click", function () {
      hiddenElements.forEach(function (element) {
        element.classList.add("active");
      });
  
      // Debugging statement
      console.log("Button clicked to show hidden elements");
    });
  });
  