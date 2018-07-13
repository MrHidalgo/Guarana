'use strict';

/**
 * @name initSwiper
 * @description initialize Swiper in JS.
 */
function initSwiper() {
  var mySwiper = new Swiper('.swiper-container.swiper--values', {
    // Optional parameters
    // direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },
    slidesPerView: 1,
    // spaceBetween: 0,
    breakpoints: {
      // when window width is <= 320px
      // 320: {
      // slidesPerView: 1,
      // spaceBetween: 10
      // },
      // when window width is <= 480px
      // 480: {
      // slidesPerView: 2,
      // spaceBetween: 20
      // },
      // when window width is <= 640px
      // 640: {
      // slidesPerView: 3,
      // spaceBetween: 30
      // }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // on: {
    //   "slideChange": function () {
    //     console.log("slideChange");
    //   },
    // }
  });
}

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
   * @description Method call for execution
   */

  /**
   * @description Init all method
   */
  function initJquery() {
    inputLabelFormAnimated();
    smoothScroll("[portfolioSmooth-btn-js]");
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
   * @description Method call for execution
   * =========================
   */
  initSwiper();

  /**
   * @description Init all method
   */
  function initNative() {
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