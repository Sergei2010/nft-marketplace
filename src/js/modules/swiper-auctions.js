// @ts-nocheck
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFuncAuctions() {
	const swiperAuctions = new Swiper('#swiper-auctions', {
		slidesPerView: 1,
		spaceBetween: 32,
		navigation: {
			nextEl: '#auctionsNext',
			prevEl: '#auctionsPrev',
		},
		breakpoints: {
			425: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 40,
			}
		}
	});
}

export default swiperFuncAuctions;
