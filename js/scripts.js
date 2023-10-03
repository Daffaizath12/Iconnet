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

function showPopup() {
  const popup = document.getElementById('textPopup');
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('textPopup');
  popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const landscapeImage = document.querySelector('.landscape-image img');
  landscapeImage.addEventListener('click', showPopup);

  document.body.addEventListener('click', function(event) {
    const popup = document.getElementById('textPopup');
    
    // Menutup popup jika yang diklik bukan bagian dari popup atau gambar trigger
    if (!popup.contains(event.target) && event.target !== landscapeImage) {
      closePopup();
    }
  });
});


function showContent() {
  const content = document.querySelectorAll('.floating-item, .floating-content');
  content.forEach(function(item) {
    item.style.display = 'block';
  });
}

function hideContent() {
  const content = document.querySelectorAll('.floating-item, .floating-content');
  content.forEach(function(item) {
    item.style.display = 'none';
  });
}

// Fungsi untuk menampilkan pop-up
function showPopup() {
  const popup = document.getElementById('textPopup');
  popup.style.display = 'block';
}

// Fungsi untuk menutup pop-up
function closePopup() {
  const popup = document.getElementById('textPopup');
  popup.style.display = 'none';
}

// Fungsi untuk memeriksa apakah pengguna berada di halaman paling bawah
function isAtBottom() {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop || 0;
  return (documentHeight - windowHeight - scrollTop) < 10; // Toleransi 10 piksel
}

// Memeriksa posisi scroll saat pengguna menggulirkan halaman
window.addEventListener('scroll', function() {
  if (isAtBottom()) {
    showContent();  // Tampilkan konten saat pengguna di halaman paling bawah
  } else {
    hideContent();  // Sembunyikan konten jika pengguna tidak di halaman paling bawah
  }
});
