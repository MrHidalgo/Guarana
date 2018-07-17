'use strict';

/**
 * @name initSwiper
 * @description initialize Swiper in JS.
 */
function initSwiper() {

  var swiperValue = new Swiper('.swiper-container.swiper--values', {
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  var swiperReviews = new Swiper('.swiper-container.swiper--reviews', {
    loop: false,
    effect: 'slide',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '\n          <div class="' + className + '">\n            <img \n              src="./img/img-pagination-' + index + '.png" \n              srcset="./img/img-pagination-' + index + '@2x.png 2x" \n              title="" \n              class="" \n              alt=""\n            >\n          </div>\n        ';
      }
    }
  });
}

/**
 * @name viewPortChecker
 * @description Detects if an element is in the viewport and adds a class to it
 */
function viewPortChecker() {
  $(".viewport-hide-js").each(function (idx, el) {

    $(el).viewportChecker({
      classToAdd: 'viewport-show-js animated',
      classToAddForFullView: 'full-visible',
      classToRemove: 'viewport-hide-js',
      removeClassAfterAnimation: true,
      offset: 0,
      repeat: false,
      callbackFunction: function callbackFunction(elem, action) {

        $(elem).css({
          'animation-name': $(el).data('animation-name') ? $(el).data('animation-name') + ', fadeIn' : 'slideInUp, fadeIn',
          'animation-delay': $(el).data('animation-delay') || '0s',
          'animation-duration': $(el).data('animation-duration') || '1s'
        });
      }
    });
  });
}

/**
 * @description Fixed header section
 */
function headerFixed() {
  var countScroll = $(window).scrollTop(),
      headerContainer = $('.header');

  if (countScroll > 10) {
    headerContainer.addClass("header--fixed");
  } else {
    headerContainer.removeClass("header--fixed");
  }
}

/**
 * @description Window on load.
 */
$(window).on("load", function (ev) {
  headerFixed();
});

/**
 * @description Window on resize.
 */
$(window).on("resize", function (ev) {});

/**
 * @description Window on scroll.
 */
$(window).on("scroll", function (ev) {
  headerFixed();
});

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /**
   * @description Init all method
   */
  function initJquery() {
    inputLabelFormAnimated();
    smoothScroll("[portfolioSmooth-btn-js]");
    viewPortChecker();
  }
  initJquery();

  /**
   *
   */
  function inputLabelFormAnimated() {
    var inputElem = $("[input-js]");

    inputElem.on("focus", function (e) {
      var curElem = $(e.target);

      curElem.closest(".form__field").addClass("is-focus");
    });

    inputElem.on("blur", function (e) {
      var curElem = $(e.target),
          curElemVal = curElem.val().trim();

      if (curElemVal === "") {
        curElem.closest(".form__field").removeClass("is-focus");
      }
    });
  }

  /**
   * @param btnName
   * @description Anchor smooth scroll
   */
  function smoothScroll(btnName) {
    $(btnName).on("click", function (e) {
      e.preventDefault();

      var id = $(this).attr('href'),
          navHeight = $(".header").outerHeight(),
          topHeightOffset = $(id).offset().top - navHeight;

      $('body, html').animate({
        scrollTop: topHeightOffset
      }, 750);
    });
  }
});

/**
 * @description Document DOM ready.
 */
(function () {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = document,
      _window = window;

  /**
   * @description Init all method
   */
  function initNative() {
    initSwiper();
    preventBehavior();
    initHamburgerMenu();
  }
  initNative();

  /**
   * @description Hamburger menu
   */
  function initHamburgerMenu() {
    var btn = _document.querySelector("[hamburger-js]"),
        navContainer = _document.querySelector(".nav__desktop"),
        hideScrollElements = _document.querySelectorAll("html, body");

    btn.addEventListener("click", function (e) {

      e.currentTarget.classList.toggle("is-active");
      navContainer.classList.toggle("is-show");

      hideScrollElements.forEach(function (val, idx) {
        val.classList.toggle("is-hideScroll");
      });
    });
  }

  /**
   * @description prevent behavior empty link
   */
  function preventBehavior() {
    var link = _document.querySelectorAll("a");

    link.forEach(function (val, idx) {
      val.addEventListener("click", function (e) {
        if (val.getAttribute("href") === "#") {
          e.preventDefault();
        }
      });
    });
  }
})();

/*!
*
* Include lib:
* - swiper;
*
* */