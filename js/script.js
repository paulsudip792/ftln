 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
       spaceBetween: 30,
      loop: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      mousewheel: true,
      keyboard: true,
      breakpoints: {
        1700:{
             slidesPerView: 3,
        },
    1470: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 1,
    },
},
    });