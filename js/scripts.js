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

  const scrollButton = document.getElementById('scrollButton');

  function checkScrollPosition() {
      if (window.scrollY > 0) {
          scrollButton.style.display = 'block'; // Tampilkan tombol saat tidak berada di bagian atas halaman
      } else {
          scrollButton.style.display = 'none'; // Sembunyikan tombol saat berada di bagian atas halaman
      }
  }

  function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Panggil fungsi checkScrollPosition() saat menggulir halaman
  window.addEventListener('scroll', checkScrollPosition);

  // Panggil fungsi checkScrollPosition() saat halaman dimuat
  window.addEventListener('load', checkScrollPosition);

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // Fungsi untuk menanggapi klik pada gambar
  $('.image-link').click(function(event) {
    var imageUrl = $(this).find('img').attr('src');
    $('#modalImage').attr('src', imageUrl);
  });
});
