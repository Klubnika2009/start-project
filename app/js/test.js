const test = new Swiper('.test-swiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  
  //cssMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  mousewheel: true,
  keyboard: true,
});