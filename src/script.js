// responsive navbar
const tombolButton = document.querySelector(".tombolButton");
const MobileMenu = document.querySelector(".MobileMenu");

function toggleMenu() {
  MobileMenu.classList.toggle("hidden");
}

tombolButton.addEventListener("click", function () {
  toggleMenu();
});

// Pemeriksaan saat inisialisasi untuk menyesuaikan tampilan menu
if (window.matchMedia("(max-width: 768px)").matches) {
  // Jika layar berukuran maksimum 768px (layar seluler), tampilkan menu
  toggleMenu();
} else {
  // Jika layar lebih besar dari 768px (layar dekstop), sembunyikan menu
  MobileMenu.classList.add("hidden");
}

// Tambahkan event listener untuk memantau perubahan lebar layar
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Jika layar berukuran maksimum 768px (layar seluler), tampilkan menu
    MobileMenu.classList.remove("hidden");
  } else {
    // Jika layar lebih besar dari 768px (layar dekstop), sembunyikan menu
    MobileMenu.classList.add("hidden");
  }
});

// hero runing text
var typed = new Typed("#typed", {
  strings: ["Join my comunity", "Create Portofolio", "Build personal branding"],
  typeSpeed: 90,
  backSpeed: 90,
  loop: true,
});

$(document).ready(function () {
  // Initialize owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  // Automate carousel navigation
  var owl = $('.owl-carousel');
  var intervalID = window.setInterval(function () {
    owl.trigger('next.owl.carousel');
  }, 3200); // function perulangan (dalam milidetik)
});
