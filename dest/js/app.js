"use strict";

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

  /**
   * @description Init all method
   */
  function init() {
    initHamburgerMenu();
  }
  init();

  /**
   * @description
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
})();

/*!
*
* Include lib:
*
* */