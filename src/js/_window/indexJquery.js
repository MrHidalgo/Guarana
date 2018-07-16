/**
 * @description Fixed header section
 */
function headerFixed() {
  let countScroll = $(window).scrollTop(),
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
$(window).on("load", (ev) => {
  headerFixed();
});


/**
 * @description Window on resize.
 */
$(window).on("resize", (ev) => {});


/**
 * @description Window on scroll.
 */
$(window).on("scroll", (ev) => {
  headerFixed();
});

