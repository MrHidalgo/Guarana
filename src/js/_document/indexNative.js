

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
   * =========================
   */

  function initHamburger() {
    const btn = _document.querySelector("[hamburger-js]");

    console.log(btn);

    btn.addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("is-active");
    });
  }
  initHamburger();

})();
