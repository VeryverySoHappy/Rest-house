var swiper = new Swiper(".visual_slide", {
  effect: "fade",
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

var swiper = new Swiper(".best_travel_list", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,    
    clickable: true,
  },
});