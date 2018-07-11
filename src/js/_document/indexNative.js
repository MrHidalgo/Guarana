

/**
 * @description Document DOM ready.
 */
(function() {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = document,
    _window = window;


  /**
   * @description Method call for execution
   * =========================
   */
  initSwiper();


  /**
   * @description Init all method
   */
  function init() {
    initHamburgerMenu();
  }
  init();


  /**
   * @description Hamburger menu
   */
  function initHamburgerMenu() {
    const btn = _document.querySelector("[hamburger-js]"),
      navContainer = _document.querySelector(".nav__desktop"),
      hideScrollElements = _document.querySelectorAll("html, body");

    btn.addEventListener("click", (e) => {

      e.currentTarget.classList.toggle("is-active");
      navContainer.classList.toggle("is-show");

      hideScrollElements.forEach((val, idx) => {
        val.classList.toggle("is-hideScroll");
      });
    });
  }
})();
