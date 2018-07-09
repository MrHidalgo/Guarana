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
   * =========================
   */

  function initHamburger() {
    var btn = _document.querySelector("[hamburger-js]");

    console.log(btn);

    btn.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("is-active");
    });
  }
  initHamburger();
})();

/*!
*
* Include lib:
*
* */