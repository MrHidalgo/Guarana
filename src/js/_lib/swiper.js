

/**
 * @name initSwiper
 * @description initialize Swiper in JS.
 */
function initSwiper() {

  const swiperValue = new Swiper('.swiper-container.swiper--values', {
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  const swiperReviews = new Swiper('.swiper-container.swiper--reviews', {
    loop: false,
    effect: 'slide',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="${className}">
            <img 
              src="./img/img-pagination-${index}.png" 
              srcset="./img/img-pagination-${index}@2x.png 2x" 
              title="" 
              class="" 
              alt=""
            >
          </div>
        `;
      }
    },
  });
}
