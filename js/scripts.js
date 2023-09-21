document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".footer-nav ul li.dropdown > a");
    const colorBackground = document.getElementById("color-background");
  
    dropdownLinks.forEach(function (link) {
      link.addEventListener("mouseover", function () {
        const computedStyle = window.getComputedStyle(link);
        const linkColor = computedStyle.getPropertyValue("color");
        colorBackground.style.backgroundColor = linkColor;
      });
  
      link.addEventListener("mouseout", function () {
        colorBackground.style.backgroundColor = "transparent";
      });
    });
  });
  