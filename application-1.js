// function-1
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2500,
        disableleOnInteraction: false,
    },
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

// function-2
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 0);
});

// function 3
$(function() {
      $(".hamburger_menu").on("click", function(){

        if($(".menu").hasClass("active")){
          $(".menu").removeClass("active");
        }
        else{
          $(".menu").addClass("active");
        }
      });
});