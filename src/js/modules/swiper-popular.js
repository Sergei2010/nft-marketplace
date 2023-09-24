// @ts-nocheck
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperHorizontal, swiperVertical;

function swiperFuncPopular() {

	const configVertical = {
		direction: 'vertical',
		slidesPerView: 3,
		slidesPerView: 'auto',
		spaceBetween: 24,
		grabCursor: true,
		a11y: false,
		freeMode: true,
		speed: 2000,
		loop: true,
		/* navigation: {
			nextEl: '#popularNext',
			prevEl: '#auctionsPrev',
		}, */
		/* autoplay: {
			delay: 0.0,
			disableOnIntaraction: false,
		} */
	};

	const configHorizontal = {
		direction: 'horizontal',
		slidesPerView: 3,
		//slidesPerView: 'auto',
		spaceBetween: 36,
		//grabCursor: true,
		a11y: false,
		freeMode: true,
		//speed: 2000,
		loop: true,
		navigation: {
			nextEl: '#popularNext',
			prevEl: '#auctionsPrev',
		},
		/* autoplay: {
			delay: 0.0,
			disableOnIntaraction: false,
		}, */
		/* breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
		} */
	};

	swiperHorizontal = new Swiper('#swiper-popular-horizontal', configHorizontal);
	swiperVertical = new Swiper('#swiper-popular-vertical', configVertical);

	//console.log('swiperHorizontal-before:', swiperHorizontal);
	//console.log('swiperVertical-before:', swiperVertical);

	//767px
	const breakpoint = window.matchMedia('(max-width:767px)');
	//console.log('breakpoint:', breakpoint);

	//ф-ия проверяет срабатывание медиа запроса в breakpoint
	const breakpointChecker = function () {
		//swiperHorizontal = new Swiper('#testimonials-horizontal-swiper', configHorizontal);
		if (breakpoint.match === true) {
			if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
			return;
		} else if (breakpoint.match === false) {
			if (swiperVertical !== undefined) swiperVertical.destroy(true, true);
			return;
		}
	};

	breakpoint.addListener(breakpointChecker);
	breakpointChecker();

	//console.log('swiperHorizontal-after:', swiperHorizontal);
	//console.log('swiperVertical-after:', swiperVertical);








	//var swiperPopular = new Swiper('#swiper-popular-horizontal', {
	//loop: 'true',
	//slidesPerView: 3,
	//direction: getDirection(),
	//direction: 'vertical',
	//grabCursor: true,
	//navigation: {
	//nextEl: '#popularNext',
	//prevEl: '#auctionsPrev',
	//},
	/* on: {
		resize: function () {
			swiperPopular.changeDirection(getDirection());
		},
	}, */
	//breakpoints: {
	//425: {
	//slidesPerView: 3,
	//spaceBetween: 24,
	//},
	//767: {
	//slidesPerView: 3,
	//spaceBetween: 36,
	//},
	//}
	//});

	/* function getDirection() {
		var windowWidth = window.innerWidth;
		var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';
		console.log('direction: ', direction);
		return direction;
	} */

	//btn
	//const popularNext = document.querySelector('#popularNext');

	//ф-ия поиска третьего слайдера
	function res() {
		return document.querySelector(
			'.popular__slider > .swiper > .swiper-wrapper > .swiper-slide-next + .swiper-slide');
	};

	// первичная установка прозрачности
	let result = res();
	if (result) {
		result.style.opacity = 0.5;
	}

	// установка прозрачности по клику
	/* if (popularNext) {
		popularNext.addEventListener('click', () => {
			result.style.opacity = 1;
			result = res();
			if (result) {
				result.style.opacity = 0.5;
			}
		});
	}
	*/
	window.addEventListener("DOMContentLoaded", (event) => {
		//btn
		const popularNext = document.querySelector('#popularNext');
		if (popularNext) {
			popularNext.addEventListener('click', () => {
				result.style.opacity = 1;
				result = res();
				if (result) {
					result.style.opacity = 0.5;
				}
			});
		}
	});
}

export default swiperFuncPopular;
