var swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  spaceBetween: 55,
  SimulateTouch: true,
  breakpoints: {
  // 768px以上の場合
    320 :{
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    // 980px以上の場合
    980: {
      slidesPerView: 3.3,
    },
    // 1200px以上の場合
    1200: {
      slidesPerView: 3.5,
    },
    1800 :{
      slidesPerView: 3,
    }
  },
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});