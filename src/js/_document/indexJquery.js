

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
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
    const inputElem = $("[input-js]");

    inputElem.on("focus", (e) => {
      let curElem = $(e.target);

      curElem.closest(".form__field").addClass("is-focus");
    });

    inputElem.on("blur", (e) => {
      let curElem = $(e.target),
        curElemVal = curElem.val().trim();

      if(curElemVal === "") {
        curElem.closest(".form__field").removeClass("is-focus");
      }
    });
  }


  /**
   *
   */
  function smoothScroll(btnName) {
    $(btnName).on("click", function (e) {
      e.preventDefault();

      const id = $(this).attr('href'),
        navHeight = $(".header").outerHeight(),
        topHeightOffset = $(id).offset().top - navHeight;

      $('body, html').animate({
        scrollTop: topHeightOffset
      }, 750);
    });
  }
});

