var swiper = new Swiper(".visual_slide", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
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