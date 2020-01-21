const toggleButton = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelector(".nav-items");
const social = document.querySelector(".social");
const icon = document.querySelector(".move-up span");

const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },

  550: {
    items: 2
  },
  960: {
    items: 3
  },
  1130: {
    items: 3
  }
};

icon.addEventListener("click", () => {
  $("html,body").animate({
    scrollTop: 0
  });
});

toggleButton.addEventListener("click", function() {
  navItems.classList.toggle("active");
  navMenu.classList.toggle("active");
  social.classList.toggle("active");
  nav.classList.toggle("active");
});

//owl-craousel for blog

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  dots: false,
  responsive: responsive,
  nav: true,
  navText: [$(".owl-nav .owl-nav-prev"), $(".owl-nav .owl-nav-next")]
});

AOS.init();
