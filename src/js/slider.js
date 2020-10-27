var sliders = document.querySelectorAll('.swiper-container');

sliders.forEach((el) => {
  var mySwiper = new Swiper(el, {
    slidesPerView: 1,
    pagination: {
      el: el.querySelector('.swiper-pagination'),
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: el.querySelector('.swiper-button-next'),
      prevEl: el.querySelector('.swiper-button-prev'),
    },
    // effect: 'fade',
    loop: true,
  })
});


