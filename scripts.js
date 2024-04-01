// BEGIN: When a Print command detected, the page address gets a query parameter and page reloaded
(function (window) {
  if (window.addEventListener) {
    var reloadForPrint = function () {
      if (location.search.indexOf('print') == -1) {
        var url = window.location.href;
        if (url.indexOf('?') != -1) {
          url += '&print';
        } else {
          url += '?print';
        }
        window.location.href = url;
      }
    };
    addEventListener('beforeprint', reloadForPrint, false);
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          reloadForPrint();
        }
      });
    }
  }
})(window);
// END: When a Print command detected, the page address gets a query parameter and page reloaded

// BEGIN: Google Analytics
var gaAnalytics = gaAnalytics || function () {};
gaAnalytics('create', 'UA-10657263-10', 'auto');
gaAnalytics('send', 'pageview');
(function () {
  var gaScript = document.createElement('script');
  gaScript.src = 'https://www.google-analytics.com/analytics.js';
  gaScript.async = 1;
  gaScript.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(gaScript);
})('gaAnalytics');
// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// END: Google Analytics

// BEGIN: Lazy load images

// This line is nothing to do with lazyload.
// By default .lazy class style set to display: none.
// Only when JavaScript is present then we are showing the elements.
$('.lazy').show();

var lazy = [];
registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);
registerListener('resize', lazyLoad);
function setLazy() {
  lazy = document.getElementsByClassName('lazy');
}
function lazyLoad() {
  for (var i = 0; i < lazy.length; i++) {
    if (isInViewport(lazy[i])) {
      if (lazy[i].getAttribute('data-src')) {
        lazy[i].src = lazy[i].getAttribute('data-src');
        lazy[i].removeAttribute('data-src');
      }
    }
  }
  cleanLazy();
}
function cleanLazy() {
  lazy = Array.prototype.filter.call(lazy, function (l) {
    return l.getAttribute('data-src');
  });
}
function isInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function registerListener(event, func) {
  if (window.addEventListener) {
    window.addEventListener(event, func);
  } else {
    window.attachEvent('on' + event, func);
  }
}

// END: Lazy load images

$(document).ready(function () {
  // BEGIN: Fall Png images to Svg images
  // if(!Modernizr.svg){var i=document.getElementsByTagName('img'),j,y;for(j=i.length;j--;){y=i[j].src;if(y.match(/svg$/)){i[j].src=y.slice(0,-3)+'png';}}}
  // END: Fall Png images to Svg images

  // BEGIN: Local page links

  $.easing.elasout = function (x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * 0.3;
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else s = (p / (2 * Math.PI)) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
  };

  $.scrollTo(0); // reset the screen to (0,0)

  $('.web-gallery-btn').click(function () {
    $.scrollTo(this.hash, 1500, { offset: { top: -70 }, easing: 'elasout' });
    return false;
  });
  $('.print-gallery-btn').click(function () {
    $.scrollTo(this.hash, 1500, { offset: { top: -70 }, easing: 'elasout' });
    return false;
  });
  $('.about-page-link').click(function () {
    $.scrollTo(this.hash, 1500, { offset: { top: -80 }, easing: 'elasout' });
    return false;
  });

  // END: Local page links

  // BEGIN: Show download menu
  $('.download-files-container').hide();
  var hidden = true;
  $('.download-btn').hover(function (e) {
    e.preventDefault();
    if (hidden) {
      $(this)
        .next('.download-files-container')
        .fadeToggle(200, function () {
          hidden = false;
        });
    }
  });

  $('html').click(function () {
    if (!hidden) {
      $('.download-files-container').fadeOut();
      hidden = true;
    }
  });

  $('.download-files-container').click(function (event) {
    event.stopPropagation();
  });

  // END: Show download menu

  // Hide Social icon names
  $('.icon-alt-name').hide();
  // Show few social icons only when javascript is enabled
  $('.behance, .pinterest, .facebook').show();

  // Show both Contact buttons only when JavaScript enabled
  $('.contact-btn').show().css('display', 'inline-block');

  // BEGIN: Show / hide footer tech panel
  $('.footer .footer-tech-btn').show();
  $('.footer .extended').hide();
  $('.footer-tech-btn').on('click', function (e) {
    $('.footer .extended').toggle();
    e.preventDefault();
  });

  // END: Show / hide footer tech panel

  // BEGIN: Skills Accordion
  $('.skills-accordion .skill-category-content').hide();
  $('.skills-accordion li h4 a').addClass('needPsuedo');
  $('.skills-accordion a').click(function (j) {
    var dropDown = $(this).closest('li').find('.skill-category-content');
    $(this).closest('.skills-accordion').find('.skill-category-content').not(dropDown).slideUp();
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.skills-accordion').find('a.active').removeClass('active');
      $(this).addClass('active');
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
  // END: Skills Accordion

  // BEGIN: Fancybox for portfolio
  Fancybox.bind('[data-fancybox]', {
    // Your custom options
  });

  // $('.fancybox').fancybox({
  //   padding: 0,
  //   openEffect: 'none',
  //   closeEffect: 'none',
  //   margin: [20, 40, 20, 40]
  // });
  // END: Fancybox for portfolio

  // BEGIN: Scroll to top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.to-top').fadeIn();
    } else {
      $('.to-top').fadeOut();
    }
  });
  $('.to-top').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  // END: Scroll to top

  // BEGIN: Lazy loading the Google font for headings
  // var xhr = new XMLHttpRequest();
  // var url = 'https://fonts.googleapis.com/css?family=Teko:400';
  //
  // xhr.open('GET', url, true);
  // xhr.onreadystatechange = function () {
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     var style = document.createElement('style');
  //     style.innerHTML = xhr.responseText;
  //     document.head.appendChild(style);
  //   }
  // };
  // xhr.send();
  // END: Lazy loading the Google font for headings

  // BEGIN: Testimonial slider
  // Only show when JavaScript is available.
  $('.section--testimonials .lzy').show();

  var mqlTestimonial = window.matchMedia('(min-width: 425px)');
  mqlTestimonial.addListener(expColTestimonials);
  expColTestimonials(mqlTestimonial);

  function expColTestimonials(mqlTestimonial) {
    if (mqlTestimonial.matches) {
      $('.section--testimonials .separator, .section--testimonials .btn--exp-col')
        .show()
        .css('display', 'inline-block');
    } else {
      $('.section--testimonials .btn--exp-col').show().css({ display: 'block', 'text-align': 'right' });
    }
  }

  var flickityOptions = {
    cellAlign: 'left',
    freeScroll: false,
    wrapAround: true,
    imagesLoaded: true,
    lazyLoad: true,
    autoPlay: 5000,
    pauseAutoPlayOnHover: true
  };

  var $testimonialCarousel = $('.section--testimonials .items-block').flickity(flickityOptions);

  var isFlickity = true;
  // toggle Flickity on/off
  $('.btn--exp-col').on('click', function (e) {
    if (isFlickity) {
      // destroy Flickity
      $testimonialCarousel.flickity('destroy');
      $testimonialCarousel.find('[data-flickity-lazyload]').each(function (i, elem) {
        var $elem = $(elem);
        $elem.attr('src', $elem.attr('data-flickity-lazyload'));
        $elem.addClass('flickity-lazyloaded');
        elem.removeAttribute('data-flickity-lazyload');
      });
    } else {
      // init new Flickity
      $testimonialCarousel.flickity();
    }
    isFlickity = !isFlickity;
    e.preventDefault();
  });

  var beforePrint = function () {
    $testimonialCarousel.flickity('destroy');
    $testimonialCarousel.find('[data-flickity-lazyload]').each(function (i, elem) {
      var $elem = $(elem);
      $elem.attr('src', $elem.attr('data-flickity-lazyload'));
      $elem.addClass('flickity-lazyloaded');
      elem.removeAttribute('data-flickity-lazyload');
    });
  };
  var afterPrint = function () {
    $testimonialCarousel.flickity();
  };

  (function (window) {
    if (window.matchMedia) {
      var mediaQueryList = window.matchMedia('print');
      mediaQueryList.addListener(function (mql) {
        if (mql.matches) {
          beforePrint();
        } else {
          afterPrint();
        }
      });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
  })(window);
  // END: Testimonial slider
});

// BEGIN: When the page gets loaded, it reads the availability of 'print' query parameter. If there is then all the lazy class images are downloaded immediately and page get printed.

lazy = document.getElementsByClassName('lazy');
if (location.search.indexOf('print') > -1) {
  for (var i = 0; i < lazy.length; i++) {
    if (lazy[i].getAttribute('data-src')) {
      lazy[i].src = lazy[i].getAttribute('data-src');
      lazy[i].removeAttribute('data-src');
    }
  }
  lazy = Array.prototype.filter.call(lazy, function (l) {
    return l.getAttribute('data-src');
  });
  window.print();
  setTimeout(function closePrintView() {
    document.location.href = '/';
  }, 3000);
}

// END: When the page gets loaded, it reads the availability of 'print' query parameter. If there is then all the lazy class images are downloaded immediately and page get printed.
