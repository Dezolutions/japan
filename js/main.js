$(function () {

  $('a').on('click', function (e) {
    e.preventDefault();

  })
  
  
  $('a[href^="#"]').on('click', function () {
    var target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top
    }, 500)
  });




  $('.modern').on('click', function () {
    $('.second').fadeOut(250, function () {
      $('.first').fadeIn(450);
    });
    $('.style__block .culture__sub-block').css('animation-name','none');

  })
  $('.ancient').on('click', function () {
    $('.first').fadeOut(250, function () {
      $('.second').fadeIn(450);
    });

  })

  $('.samurai__slider').slick({
    infinite: true,
    prevArrow: '<div class="arrow__left wow bounceInLeft" data-wow-duration = "1s" data-wow-offset="200">前</div>',
    nextArrow: '<div class="arrow__right wow bounceInRight" data-wow-duration = "1s" data-wow-offset="200">次</div>',
    asNavFor: '.samurai__slider-second'
  })

  $('.samurai__slider-second').slick({
    asNavFor: '.samurai__slider',
    arrows: false,
    fade: true


  })



  $('.acordeon__item-title').on('click', function () {
    if ($(this).attr('val') == 'close') {
      $('.acordeon__item-title').attr('val', 'close');
      $(this).attr('val', 'open');
      $('.acordeon__item-title').removeClass('acordeon__active');
      $(this).addClass('acordeon__active');
      $(this).next('.acordeon__item-content').slideToggle();

    }
    else {
      $('.acordeon__item-content').slideUp();
      $(this).removeClass('acordeon__active');
      $(this).attr('val', 'close');
    }


  })


  $('.sub-block__right').on('click', function () {
    $(this).toggleClass('sub-block__right__animated');
    $(this).children().toggleClass('icon__animated');
    $(this).parent().prev('.culture__img').toggleClass('culture__img__animated');
    $(this).parent('.culture__sub-block').toggleClass('culture__sub-block__animated');
    $(this).prev('.sub-block__left').toggleClass('sub-block__left__animated');
    $(this).prev().children('.sub-block__text').toggleClass('sub-block__text__animated');
    $(this).prev().children('.text__item').toggleClass('text__item__animated');
  })


  new WOW().init();

});
