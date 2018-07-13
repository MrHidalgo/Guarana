

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
    categoryPortfolioFilter();
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
  function categoryPortfolioFilter() {
    $("[category-filterBtn-js]").on("click", (e) => {
      const elem = $(e.currentTarget),
        elemAttr = elem.attr("data-filterBtn");

      // console.log(`elemAttr: ${elemAttr}`);
    });
  }
});

