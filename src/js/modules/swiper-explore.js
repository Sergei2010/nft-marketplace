// @ts-nocheck
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperExploreHorizontal, swiperExploreVertical;;

function swiperFuncExplore() {

	const configExploreVertical = {
		direction: 'vertical',
		slidesPerView: 3,
		slidesPerView: 'auto',
		spaceBetween: 24,
		grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 2000,
		loop: true,
	};

	const configExploreHorizontal = {
		direction: 'horizontal',
		slidesPerView: 4,
		//slidesPerView: 'auto',
		spaceBetween: 36,
		//grabCursor: true,
		a11y: false,
		freeMode: true,
		//speed: 2000,
		loop: true,
		navigation: {
			nextEl: '#exploreNext',
		},
	};

	swiperExploreHorizontal = new Swiper('#swiper-explore-horizontal', configExploreHorizontal);
	swiperExploreVertical = new Swiper('#swiper-explore-vertical', configExploreVertical);

	//767px
	const breakpoint = window.matchMedia('(max-width:767px)');

	//ф-ия проверяет срабатывание медиа запроса в breakpoint
	const breakpointChecker = function () {
		if (breakpoint.match === true) {
			if (swiperExploreHorizontal !== undefined) swiperExploreHorizontal.destroy(true, true);
			return;
		} else if (breakpoint.match === false) {
			if (swiperExploreVertical !== undefined) swiperExploreVertical.destroy(true, true);
			return;
		}
	};

	breakpoint.addListener(breakpointChecker);
	breakpointChecker();




	/* const swiperAuctions = new Swiper('#swiper-explore-horizontal', {
		loop: 'true',
		slidesPerView: 1,
		spaceBetween: 32,
		navigation: {
			nextEl: '#exploreNext',
		},
		breakpoints: {
			425: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 40,
			}
		}
	}); */


	//ф-ия поиска первого слайдера
	function resFirst() {
		return document.querySelector(
			'.explore__slider > .swiper > .swiper-wrapper > .swiper-slide-active');
	}

	// первичная установка прозрачности 1-го слайда
	let resultFirst = resFirst();
	if (resultFirst) {
		resultFirst.style.opacity = 0.5;
	}

	//ф-ия поиска четвёртого слайдера
	function resFour() {
		return document.querySelector(
			'.explore__slider > .swiper > .swiper-wrapper > .swiper-slide-next + .swiper-slide + .swiper-slide');
	}

	// первичная установка прозрачности 4-го слайда
	let resultFour = resFour();
	if (resultFour) {
		resultFour.style.opacity = 0.4;
	}

	window.addEventListener("DOMContentLoaded", (event) => {
		//btn
		const exploreNext = document.querySelector('#exploreNext');
		if (exploreNext) {
			exploreNext.addEventListener('click', () => {
				resultFirst.style.opacity = 1;
				resultFour.style.opacity = 1;

				resultFirst = resFirst();
				if (resultFirst) {
					resultFirst.style.opacity = 0.4;
				}

				resultFour = resFour();
				if (resultFour) {
					resultFour.style.opacity = 0.4;
				}
			});
		}
	});

	// установка прозрачности по клику
	/* exploreNext.addEventListener('click', () => {
		resultFirst.style.opacity = 1;
		resultFour.style.opacity = 1;

		resultFirst = resFirst();
		if (resultFirst) {
			resultFirst.style.opacity = 0.4;
		}

		resultFour = resFour();
		if (resultFour) {
			resultFour.style.opacity = 0.4;
		}
	}); */

}

export default swiperFuncExplore;
