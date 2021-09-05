$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]

});

$('.slider-nav_part').slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('a[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  $('.slider-nav').slick('slickGoTo', slideno - 1);
});

$window = $(window);
var $counters = $('.js-counter');

/**
 * Load
 */

$window.on('load', function () {
  $counters.each(function () {
    var $counter = $(this);
    if (isInViewport($counter[0])) {
      if (!$counter.hasClass('is-counting')) {
        drawCounter($counter);
      }
    }
  });
});

/**
 * Scroll
 */

$window.on('scroll', function () {
  $counters.each(function () {
    var $counter = $(this);
    if (isInViewport($counter[0])) {
      if (!$counter.hasClass('is-counting')) {
        drawCounter($counter);
      }
    }
  });
});

/**
 * Check if an element is the current viewport
 */

function isInViewport(elem) {
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

/**
 * Draw the counter
 */

function drawCounter(counter) {
  var $counter = counter;
  var $counter_value = $('.js-counter-value', $counter);
  var end = $counter.data('counter-end');
  var interval = $counter.data('counter-interval');
  var count = 1;

  var update = setInterval(function (){
    $counter_value.text(count);
    $counter.addClass('is-counting');

    if (count === end) {
      clearInterval(update);
      $counter.addClass('is-counting');
    }

    count ++;
  }, interval);
}

/*Добавил новую функция внизу*/
$(function () {
    $(document).ready(function () {
        $("a.program_card_order").click(function () {
            $("html,body").animate({
                scrollTop: $($(this).attr("href")).offset().top + "px"
            }, {
                duration: 1000,
                easing: "swing"
            });
            return false;
        });
    });
});
