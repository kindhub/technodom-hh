import VSwiper from "./modules/VSwiper";
import Anchor from "./modules/Anchor";
import Countup from "./custom_modules/Countup";
import Nav from "./modules/Nav";
import VacancyBtn from "./modules/VacancyBtn";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

  function initValuesSlider() {
		swiper.init(".tmpl-hh__values-slider", {
			spaceBetween: 30,
			loop: true,
			// speed: 5000,
			// autoplay: {
			// 	delay: 1,
			// },
			slidesPerView: 2,
			disableOnInteraction: true,
			breakpoints: {
        1339: {
          slidesPerView: 1,
        },
        1019: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
				699: {
					spaceBetween: 10,
          slidesPerView: 1,
				},
        529: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
			}
		});
	}


function initFirstSlider() {
  swiper.init(".tmpl-hh__first-slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__first-slider-arrow-prev",
      nextEl: ".tmpl-hh__first-slider-arrow-next",
    },
    breakpoints: {
      1339: {
        spaceBetween: 30,
      },
      529: {
        spaceBetween: 15,
      },
    },
  });
}
function initSecondSlider() {
  swiper.init(".tmpl-hh__second-slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__second-slider-arrow-prev",
      nextEl: ".tmpl-hh__second-slider-arrow-next",
    },
    breakpoints: {
      1339: {
        spaceBetween: 30,
      },
      529: {
        spaceBetween: 15,
      },
    },
  });
}
function initThirdSlider() {
  swiper.init(".tmpl-hh__third-slider", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__third-slider-arrow-prev",
      nextEl: ".tmpl-hh__third-slider-arrow-next",
    },
    breakpoints: {
      1339: {
        spaceBetween: 30,
      },
      529: {
        spaceBetween: 15,
      },
    },
  });
}
function initFourthSlider() {
  swiper.init(".tmpl-hh__fourth-slider", {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 25,
    autoHeight: true,
    navigation: {
      prevEl: ".tmpl-hh__fourth-slider-arrow-prev",
      nextEl: ".tmpl-hh__fourth-slider-arrow-next",
    },
    bulletActiveClass: ".tmpl-hh__slider-pagination-active",
    pagination: {
      el: ".tmpl-hh__slider__pagination",
      clickable: true,
    },
    breakpoints: {
      1339: {
        spaceBetween: 20,
      },
      529: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
    },
  });
}

const scrollElements2 = document.querySelectorAll(".tmpl-hh__counter-wrapper");

const contentKz = document.querySelector(".tmpl-hh__content__progress");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation = () => {
  scrollElements2.forEach((el) => {
    if (elementInView(el, 1.5)) {
      if (contentKz.classList.contains("tmpl-hh__content--active")) {
        new Countup(".tmpl-hh__s-stats");
      }
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const swiper = new VSwiper();
new Anchor();
new Nav();
new VacancyBtn();
initFirstSlider();
initSecondSlider();
initThirdSlider();
initFourthSlider();
initValuesSlider();