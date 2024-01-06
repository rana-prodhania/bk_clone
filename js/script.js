$(document).ready(function () {
    // Slider
    $(".slider").slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },

        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
    
    // Aos Animation
    AOS.init();
  });
