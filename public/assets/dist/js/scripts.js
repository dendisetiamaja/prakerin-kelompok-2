(function() {
  'use strict';
  // Page loading effect
  // $(".rq-listing-details-comment-sort").select2();
  $(window).load(function() {
    $('#rq-page-loading').fadeOut('slow');
  });

  var btn = [].slice.call(document.getElementsByClassName('scholar-tab-btn'));
  btn.map(function(item, index) {
    item.addEventListener('click', function() {
      btn.forEach(function(item) {
        item.classList.remove('active');
      });
      item.classList.add('active');
      document
        .getElementById('scholar-banner-tab')
        .setAttribute('data-tab', index);
    });
  });

  // Search toggle on mobile device
  $('.rq-search-toggle button').on('click', function() {
    $(this).toggleClass('active');
    $('.rq-search-container').slideToggle(300);
  });

  // category map button to show bottom result when mobile device
  if ($('#rq-category-result').length > 0) {
    $('.show-result-btn').on('click', function() {
      $('html, body').animate(
        {
          scrollTop: $('#rq-category-result').offset().top,
        },
        1000
      );
    });
  }

  // Javascript rating plugin call
  if ($('#rateYo').length > 0) {
    $('#rateYo').rateYo({
      starWidth: '20px',
      normalFill: '#ccc',
    });
  }

  // jquery match height call
  if ($('.equal-height').length > 0) {
    $('.equal-height').matchHeight();
  }

  // custom selecbox selectize
  $('.rq-search-content select').selectize();
  $('.rq-category-select select').selectize();
  $('.rq-listing-details-comment-sort').selectize();
  //about_us slider
  // $('.rq-owl-carousel').owlCarousel({
  //     stagePadding: 200,
  //     loop:true,
  //     margin:10,
  //     nav:false,
  //     items:1,
  //     lazyLoad: true,
  //     nav:true,
  //     autoplay:false,
  //   responsive:{
  //         0:{
  //             items:1,
  //             stagePadding: 60
  //         },
  //         600:{
  //             items:1,
  //             stagePadding: 100
  //         },
  //         1000:{
  //             items:1,
  //             stagePadding: 200
  //         },
  //         1200:{
  //             items:1,
  //             stagePadding: 250
  //         },
  //         1400:{
  //             items:1,
  //             stagePadding: 300
  //         },
  //         1600:{
  //             items:1,
  //             stagePadding: 350
  //         },
  //         1800:{
  //             items:1,
  //             stagePadding: 400
  //         }
  //     }
  // });
  //header nav menu toggle by paul
  $('.headroom-sticky').sticky({ topSpacing: 0 });
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
      $('.home-page-menu').addClass('sticky-scroll animated');
    }
    if (scroll === 0) {
      $('.home-page-menu').removeClass('sticky-scroll animated');
    }
  });
  $('.headroom-sticky').sticky({ topSpacing: 0 });

  var height = $(window).height();
  var h = $('.home-header').height();
  var mh = $('.navbar-home').height();
  var ah = parseInt(h) + parseInt(mh);

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= ah) {
      $('.home-page').addClass('sticky-scroll animated');
    } else {
      $('.home-page').removeClass('sticky-scroll animated');
    }
    // else if(scroll >=20){
    //   $(".home-page-menu").addClass("sticky-scroll animated");
    // }
    // else {
    //   $(".home-page-menu , .home-page").removeClass("sticky-scroll animated");
    // }
  });

  // Company masonry block call
  $('.masonry-wrapper').masonry({
    itemSelector: '.rq-masonry-item',
    columnWidth: '.item-width',
  });

  // Blog masonry call
  function masonary() {
    $('.masonry-blog-layout').masonry({
      itemSelector: '.rq-masonry-blog-item',
      columnWidth: '.blog-width',
      percentPosition: true,
    });
  }
  setTimeout(masonary, 500);

  // Details slider
  if ($('.details-slider').length > 0) {
    jQuery('.details-slider').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      nav: true,
      navText: ['&#xf3d2', '&#xf3d3;'],
    });
  }
  // Details slider of online-course
  if ($('.online-course.details-slider').length > 0) {
    jQuery('.online-course.details-slider').owlCarousel({
      center: true,
      items: 1,
      loop: true,
      nav: true,
      navText: [
        '<i class="ion-ios-arrow-thin-left"></i>',
        '<i class="ion-ios-arrow-thin-right"></i>',
      ],
    });
  }

  // lawyer testimonial slider
  if ($('.lawyer-testimonial').length > 0) {
    jQuery('.lawyer-testimonial').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      navText: ['&#xf3d5', '&#xf3d6'],
    });
  }
  //top hotel slider
  if ($('.top-hotel').length > 0) {
    jQuery('.top-hotel').owlCarousel({
      items: 5,
      loop: true,
      autoplay: true,
      margin: 5,
      nav: true,
      navText: ['&#xf3d5', '&#xf3d6'],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
          autoplay: true,
        },
        1000: {
          items: 5,
          nav: true,
          loop: false,
        },
      },
    });
    // var hotelitemWidth = jQuery('.top-hotel .item').width();
    // var hotelitemHeight = $('.owl-item').matchHeight();
    // //var hotelitemHeight = $('owl-item').height();
    // var arrowHeight = function(){
    //   jQuery('.top-hotel .owl-prev, .top-hotel .owl-next').css({width: hotelitemWidth + 'px', height: $('.owl-item').height() + 'px'});
    // }
    // setTimeout(arrowHeight);
  }
  // Top online-course sldier by paul

  if ($('.top-online-course').length > 0) {
    jQuery('.top-online-course').owlCarousel({
      items: 5,
      loop: true,
      autoplay: true,
      margin: 5,
      autoplayHoverPause: true,
      nav: true,
      navText: ['&#xf3d5', '&#xf3d6'],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
          autoplay: true,
        },
        1000: {
          items: 5,
          nav: true,
          autoplay: true,
        },
      },
    });
  }
  //hotel slider
  if ($('.top-hotel-blog').length > 0) {
    jQuery('.top-hotel-blog').owlCarousel({
      items: 4,
      loop: true,
      autoplay: false,
      margin: 5,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="ion-ios-arrow-thin-left"></i>',
        '<i class="ion-ios-arrow-thin-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 2,
          nav: true,
        },
      },
    });
  }

  //home page sblog slide by paul
  if ($('.top-online-course-blog').length > 0) {
    jQuery('.top-online-course-blog').owlCarousel({
      items: 4,
      loop: true,
      autoplay: false,
      margin: 5,
      autoplayHoverPause: true,
      nav: true,
      navText: [
        '<i class="ion-ios-arrow-thin-left"></i>',
        '<i class="ion-ios-arrow-thin-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 2,
          nav: true,
        },
      },
    });
  }

  // Partner sldier
  if ($('.partners-wrapper').length > 0) {
    $('.partners-wrapper').owlCarousel({
      items: 5,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }

  // Elements page progress bar
  $('.progress-bar.one').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).css({ width: '70%' });
    } else {
      $(this).css({ width: '0%' });
    }
  });
  $('.progress-bar.two').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).css({ width: '95%' });
    } else {
      $(this).css({ width: '0%' });
    }
  });

  $('.progress-bar.three').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).css({ width: '50%' });
    } else {
      $(this).css({ width: '0%' });
    }
  });

  // counter
  if ($('.fact-box-count').length > 0) {
    $('.fact-box-count').countTo();
  }
  if ($('.rq-listing-counter-number').length > 0) {
    $('.rq-listing-counter-number').countTo();
  }

  // Elements sidebar menu sticky top
  if ($('#elements-menu').length > 0) {
    $('#elements-menu').sticky({ topSpacing: 100 });
  }
  $(window).scroll(function() {
    if (
      $(this).scrollTop() >
      $(document).height() - $('.rq-footer').height() - $(window).height()
    ) {
      $('#elements-menu').css('visibility', 'hidden');
    } else {
      $('#elements-menu').css('visibility', 'visible');
    }
  });

  // jQuery ui Slider
  // if($('.scholar-ui-slider').length > 0 ){
  //   $( ".scholar-ui-slider" ).slider({
  //     range: "min",
  //     value: 800,
  //     min: 1,
  //     max: 1600,
  //     slide: function( event, ui ) {
  //       $( ".show-slider-amount" ).html( ui.value + ' KM' );
  //     }
  //   });
  //   $( ".show-slider-amount" ).html( $( ".scholar-ui-slider" ).slider( "values", 0 ) + ' KM' );
  // }

  // TEstimonial slider
  if ($('#carousel').length > 0) {
    var testimonialSlider = function() {
      $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
          animation: 'slide',
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          itemWidth: 90,
          itemMargin: 10,
          asNavFor: '#slider',
          maxItems: 3,
          directionNav: true,
        });

        $('#slider').flexslider({
          animation: 'slide',
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: '#carousel',
        });
      });
    };
    testimonialSlider();
  }

  // listing slider
  if ($('#listing-carousel').length > 0) {
    var productListing = function() {
      $(window).load(function() {
        // The slider being synced must be initialized first
        $('#listing-carousel').flexslider({
          animation: 'slide',
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          itemWidth: 90,
          asNavFor: '#listing-slider',
          maxItems: 4,
          directionNav: true,
          itemMargin: 15,
        });

        $('#listing-slider').flexslider({
          animation: 'slide',
          controlNav: false,
          animationLoop: false,
          slideshow: false,
          sync: '#listing-carousel',
        });
      });
    };
    productListing();
  }

  // Fitvids call
  if ($('.video-wrapper').length > 0) {
    fitvids('.video-wrapper');
  }
  if ($('.post-content').length > 0) {
    fitvids('.post-content');
  }
  // REsize window measure for map
  $(window).resize(function() {
    var headerHeight = $('.headroom-sticky').outerHeight();
    $('rq-category-map-contains').height($(window).height() - headerHeight);
  });
  $(window).trigger('resize');
})(jQuery);

(function() {
  'use strict';
  $(window).load(function() {
    // On load
    var header = $('.headroom-sticky').outerHeight();
    $('.rq-category-map-contains').css({
      height: $(window).height() - header + 'px',
    });
  });
  $(window).resize(function() {
    // On resize
    var header = $('.headroom-sticky').outerHeight();
    $('.rq-category-map-contains').css({
      height: $(window).height() - header + 'px',
    });
  });
  $(window).trigger('resize');
})(jQuery);

(function() {
  'use strict';
  // malihu custom scroll bar
  if ($('.rq-scrollable-div').length > 0) {
    var check = $('.rq-testimonial-single').length;
    $('.rq-testimonial-content').css({ width: check * 460 + 'px' });
    $('.rq-scrollable-div').mCustomScrollbar({
      axis: 'x',
      theme: 'light-3',
      scrollbarPosition: 'outside',
      mouseWheel: { axis: 'y' },
    });
  }

  // Footer toggle widget
  if ($('.toggle-widget').length > 0) {
    $('.toggle-widget').on('click', function() {
      $('.footer-widget').slideToggle(300);
      $(this).toggleClass('active');
    });
  }

  // Datetime picker
  if ($('input#startdate').length > 0) {
    $('input#enddate').on('click', function() {
      $('input#startdate').trigger('click');
    });
    $('input#startdate').daterangepicker({
      autoUpdateInput: false,
      minDate: new Date(),
      locale: {
        cancelLabel: 'Clear',
      },
    });

    $('input#startdate').on('apply.daterangepicker', function(ev, picker) {
      $('#startdate').val(picker.startDate.format('MM/DD/YYYY'));
    });
    $('input#startdate').on('apply.daterangepicker', function(ev, picker) {
      $('#enddate').val(picker.endDate.format('MM/DD/YYYY'));
    });

    $('input#startdate').on('cancel.daterangepicker', function(ev, picker) {
      $('input#startdate').val('');
      $('input#enddate').val('');
    });
  }

  // Faq accordion
  if ($('.related-car-faq').length > 0) {
    $('.related-car-faq  .rq-category-result-items').niceScroll({
      scrollspeed: 10,
      mousescrollstep: 100,
      autohidemode: false,
      cursorcolor: '#0a252e',
      background: '#efeeee',
      cursorborderradius: 0,
      cursorborder: 0,
    });
  }

  var faqHidden = $('.faq-single .hidden-content').hide();
  $('.faq-single').on('click', 'a.faq-title', function(e) {
    e.preventDefault();
    var item = $(this);
    var row = item.next('p.hidden-content');
    var contentHide = $('p.hidden-content');
    var titleHide = $('a.faq-title');

    if (item.hasClass('active') !== false) {
      contentHide.slideUp();
      item.removeClass('active');
    } else {
      titleHide.removeClass('active');
      item.toggleClass('active');
      contentHide.slideUp();
      row.slideToggle();
    }
  });
})(jQuery);

new WOW().init();
/**********************
rq-main-slider
**********************/
if ($('.rq-main-slider').length > 0) {
  $('.rq-main-slider').owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayTimeout: 5000,
  });
}
/**********************
categori-menu
**********************/

if (window.matchMedia('(max-width: 991px)').matches) {
  $('.categori-menu p').on('click', function() {
    $('.categori-menu').toggleClass('rq-sks');
    if ($('.categori-menu').hasClass('rq-sks')) {
      $('.categori-unorder').css({
        top: '54px',
        opacity: '1',
        visibility: 'visible',
      });
    } else {
      $('.categori-unorder').css({
        top: '54px',
        opacity: '0',
        visibility: 'hidden',
      });
    }
  });
} else {
  /* the viewport is less than 400 pixels wide */
  $('.categori-menu').on('mouseover', function() {
    $('.categori-unorder').css({
      top: '54px',
      opacity: '1',
      visibility: 'visible',
    });
  });
  $('.categori-menu').on('mouseleave', function() {
    $('.categori-unorder').css({
      top: '54px',
      opacity: '0',
      visibility: 'hidden',
    });
  });
}

// if (window.matchMedia("(max-width: 767px)").matches) {
//      $("#rq_inner_sks a").on("click", function() {
//         $("#rq_inner_sks").toggleClass("active");
//         if($("#rq_inner_sks").hasClass("active")) {
//           $("#rq_inner_sks > .rq-dropdown").css({"display":"block", "opacity":"1", "visibility":"visible", "position":"relative"});
//           $("#rq_inner_sks > a i").removeClass("fa-angle-right");
//           $("#rq_inner_sks > a i").addClass("fa-angle-down");
//         }else {
//           $("#rq_inner_sks > .rq-dropdown").css({"display":"none", "opacity":"0", "visibility":"hidden", "position":"absolute"});
//           $("#rq_inner_sks > a i").removeClass("fa-angle-down");
//           $("#rq_inner_sks > a i").addClass("fa-angle-right");
//         }
//       });
//   }
/*$(window).on('resize',function(){location.reload();}); */
/**********************
product-carousel
**********************/
if ($('.product-carousel').length > 0) {
  $('.product-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='ion-ios-arrow-thin-left'></i>",
      "<i class='ion-ios-arrow-thin-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1150: {
        items: 5,
      },
    },
  });
}
/**********************
sticky-nav
**********************/

if ($('.home-page-rq#stickynav').length > 0) {
  var stickyHeaderTop = $('#stickynav').offset().top;
  $(window).scroll(function() {
    if ($(window).scrollTop() > stickyHeaderTop) {
      $('#stickynav').css({
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        'z-index': '9999',
      });
      $('#stickynav .categori-menu').css({ display: 'none' });
      $('#stickynav .rq-custom-logo').css({ display: 'block' });
      $('#stickynav .container').addClass('container-fluid');
      $('#stickynav .dropdown.rq-seller.not-show').css({ display: 'block' });
      $('#stickynav .rq-custom-3').css({ width: '260px' });
      $('#stickynav .rq-custom-9').css({ width: 'calc(100% - 260px)' });
      $('#stickynav').addClass('rq-script-class-for-nav');
    } else {
      $('#stickynav').css({
        position: 'static',
        top: '0px',
        left: '0px',
        right: '0px',
        'z-index': '9999',
      });
      $('#stickynav .categori-menu').css({ display: 'block' });
      $('#stickynav .rq-custom-logo').css({ display: 'none' });
      $('#stickynav .container').removeClass('container-fluid');
      $('#stickynav .dropdown.rq-seller.not-show').css({ display: 'none' });
      $('#stickynav .rq-custom-3').css({ width: '' });
      $('#stickynav .rq-custom-9').css({ width: '' });
      $('#stickynav').removeClass('rq-script-class-for-nav');
    }
  });
}
if ($('#stickynav').length > 0 && $('.home-page-rq#stickynav').length < 1) {
  $('#stickynav').css({
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    'z-index': '99',
    transition: 'none',
  });
  $('#stickynav .categori-menu').css({ display: 'none' });
  $('#stickynav .rq-custom-logo').css({ display: 'block' });
  $('#stickynav .container').addClass('container-fluid');
  $('#stickynav .dropdown.rq-seller.not-show').css({ display: 'block' });
  $('#stickynav .rq-custom-3').css({ width: '260px' });
  $('#stickynav .rq-custom-9').css({ width: 'calc(100% - 260px)' });
  $('#stickynav').addClass('rq-script-class-for-nav');
  $('.rq-header-location .top-bar').css({ display: 'none' });
}
/**********************
Range-slider
**********************/
if ($('#slider-range').length > 0) {
  $(function() {
    $('#slider-range').slider({
      range: true,
      min: 0,
      max: 500,
      values: [75, 300],
      slide: function(event, ui) {
        $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
      },
    });
    $('#amount').val(
      '$' +
        $('#slider-range').slider('values', 0) +
        ' - $' +
        $('#slider-range').slider('values', 1)
    );
  });
}
/**********************
Product-slider
**********************/

if ($('#carousel').length > 0) {
  var testimonialSlider = function() {
    $(window).load(function() {
      // The slider being synced must be initialized first
      $('#carousel').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        // itemWidth: 210,
        itemWidth: 125,
        itemMargin: 6,
        asNavFor: '#slider',
      });

      $('#slider').flexslider({
        animation: 'slide',
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: '#carousel',
      });
    });
  };
  testimonialSlider();
}
/**********************
counter
**********************/
if ($('#counter i').length > 0) {
  $('#counter i').on('click', function() {
    // alert("sdfsf");
    var input = $('#counter input').val();
    $('#counter .ion-android-remove').click(function() {
      input--;
    });
    $('#counter .ion-android-add').click(function() {
      input++;
    });
  });
}
/**********************
CART ITEM
**********************/
if ($('.rq-shopping-cart-items-list').length > 0) {
  $('.rq-shopping-cart-items-list').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this)
        .parent()
        .find('.rq-shopping-cart-inner-div')
        .addClass('rq-visible');
    } else {
      $(this)
        .parent()
        .find('.rq-shopping-cart-inner-div')
        .removeClass('rq-visible');
    }
  });
  $(document).mouseup(function(e) {
    var container = $('.rq-shopping-cart-inner-div');

    if (
      !container.is(e.target) && // if the target of the click isn't the container...
      container.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      container.removeClass('rq-visible');
      $('.rq-shopping-cart-items-list').removeClass('active');
    }
  });
}
/**********************
SHIPPING HIDE/SHOW
**********************/

/*$(".shipping-rq").click(function() {
  var my_var = $(this).parent();
  my_var.next().fadeToggle(500);
});*/
$('.shipping-rq').on('click', function() {
  var my_var = $(this).parent('.rq-cart-options-title');
  // AccordionHeight = my_var.find('.shipping-it').outerHeight();
  my_var.siblings('.shipping-it').toggleClass('rq_sks');
  if (my_var.siblings('.shipping-it').hasClass('rq_sks')) {
    my_var.siblings('.shipping-it').css({
      visiblity: 'hidden',
      opacity: '0',
      height: '0',
      padding: '10px 0',
    });
    my_var.siblings('.shipping-it form').css({ display: 'none' });
  } else {
    my_var.siblings('.shipping-it').css({
      visiblity: 'visible',
      opacity: '1',
      height: '370px',
      padding: '45px 0',
    });
    my_var.siblings('.shipping-it form').css({ display: 'block' });
  }
});
/**********************
POST GALLERY SINGLE
**********************/
/*if($(".flexslider.post-gallery-single").length > 0 ) {
  $(window).load(function() {
    $('.flexslider.post-gallery-single').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  });
}*/

if ($('.flexslider.post-gallery-single').length > 0) {
  $(window).load(function() {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      maxItems: 5,
      itemWidth: 90,
      itemMargin: 10,
      directionNav: true,
      asNavFor: '#slider',
    });

    $('#slider').flexslider({
      animation: 'slide',
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      sync: '#carousel',
    });
  });
}

if ($('.rq-unified-home-slider').length > 0) {
  jQuery('.rq-unified-home-slider.hotel').owlCarousel({
    items: 4,
    loop: true,
    // autoplay: true,
    margin: 15,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 4,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-unified-home-slider.real-estate').length > 0) {
  jQuery('.rq-unified-home-slider.real-estate').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 15,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 3,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-unified-home-slider.company').length > 0) {
  jQuery('.rq-unified-home-slider.company').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 15,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 4,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-unified-home-slider.lawyer').length > 0) {
  jQuery('.rq-unified-home-slider.lawyer').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 15,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 5,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-unified-home-slider.doctor').length > 0) {
  jQuery('.rq-unified-home-slider.doctor').owlCarousel({
    loop: true,
    // autoplay: true,
    margin: 15,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 3,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-unified-home-slider.job').length > 0) {
  jQuery('.rq-unified-home-slider.job').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 1,
        nav: true,
        // autoplay: true
      },
    },
  });
}

// if( $('.rq-pricing-table-wrapper').length > 0 ) {

//     jQuery('.rq-pricing-table-wrapper').owlCarousel({

//       loop:true,
//       // autoplay: true,

//       autoplayHoverPause:true,
//       nav:false,
//       dots:false,
//       center :true,
//       margin:10,
//       responsive:{
//         0:{
//           items:1,
//           nav:false
//         },
//         600:{
//           items:1,
//           nav:false,
//           // autoplay: true
//         },
//         1000:{
//           items:2
//           // autoplay: true

//         }
//       }

//     });
//    }

if ($('.follow-following-list-slider').length > 0) {
  jQuery('.follow-following-list-slider').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 1,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-profile-hotel-listing ').length > 0) {
  jQuery('.rq-profile-hotel-listing ').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 2,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-profile-real-listing ').length > 0) {
  jQuery('.rq-profile-real-listing ').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 2,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-profile-company-listing ').length > 0) {
  jQuery('.rq-profile-company-listing ').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 2,
        nav: true,
        // autoplay: true
      },
    },
  });
}

if ($('.rq-profile-doctor-listing ').length > 0) {
  jQuery('.rq-profile-doctor-listing ').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 2,
        nav: true,
        // autoplay: true
      },
    },
  });
}
if ($('.rq-profile-job-listing ').length > 0) {
  jQuery('.rq-profile-job-listing ').owlCarousel({
    loop: true,
    // autoplay: true,

    autoplayHoverPause: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: [
      "<i class='ion-ios-arrow-left'></i>",
      "<i class='ion-ios-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
        // autoplay: true
      },
      1000: {
        items: 2,
        nav: true,
        // autoplay: true
      },
    },
  });
}

$('.rq-unified-home-slider.hotel .owl-next').on('click', function() {
  $('.rq-unified-home-slider.hotel .owl-prev').css('opacity', '1');
});

$('.rq-unified-home-slider.real-estate .owl-next').on('click', function() {
  $('.rq-unified-home-slider.real-estate .owl-prev').css('opacity', '1');
});
$('.rq-unified-home-slider.lawyer .owl-next').on('click', function() {
  $('.rq-unified-home-slider.lawyer .owl-prev').css('opacity', '1');
});
$('.rq-unified-home-slider.doctor .owl-next').on('click', function() {
  $('.rq-unified-home-slider.doctor .owl-prev').css('opacity', '1');
});
$('.rq-unified-home-slider.company .owl-next').on('click', function() {
  $('.rq-unified-home-slider.company .owl-prev').css('opacity', '1');
});
$('.rq-unified-home-slider.job .owl-next').on('click', function() {
  $('.rq-unified-home-slider.job .owl-prev').css('opacity', '1');
});
$('.follow-following-list-slider .owl-next').on('click', function() {
  $('.follow-following-list-slider .owl-prev').css('opacity', '1');
});

// Alternative Comment Form btn spinner effect

$('.rq-alt-comment-submit-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('is-loading');
});

//Unified Masonary Wrapper
if ($('.rq-unified-masonary-wrapper').length > 0) {
  var $portfolioContainer = $('.rq-unified-masonary-wrapper');
  $portfolioContainer.isotope({
    itemSelector: '.rq-unified-masonary-item',
    percentPosition: true,
    masonry: {
      columnWidth: 1,
    },
  });
}
