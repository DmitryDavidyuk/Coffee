import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";
const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".menu__list");
const body = document.querySelector("body");
let addWindowScrollEvent = false;

menuBtn.addEventListener("click", () => {
	menuMobile.classList.toggle("menu--open");
	menuBtn.classList.toggle("open");
	body.classList.toggle("lock");
});
function headerScroll() {
	addWindowScrollEvent = true;
	const header = document.querySelector("header.header");
	const headerShow = header.hasAttribute("data-scroll-show");
	const headerShowTimer = header.dataset.scrollShow
		? header.dataset.scrollShow
		: 500;
	const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
	let scrollDirection = 0;
	let timer;
	document.addEventListener("windowScroll", function (e) {
		const scrollTop = window.scrollY;
		clearTimeout(timer);
		if (scrollTop >= startPoint) {
			!header.classList.contains("_header-scroll")
				? header.classList.add("_header-scroll")
				: null;
			if (headerShow) {
				if (scrollTop > scrollDirection) {
					// downscroll code
					header.classList.contains("_header-show")
						? header.classList.remove("_header-show")
						: null;
				} else {
					// upscroll code
					!header.classList.contains("_header-show")
						? header.classList.add("_header-show")
						: null;
				}
				timer = setTimeout(() => {
					!header.classList.contains("_header-show")
						? header.classList.add("_header-show")
						: null;
				}, headerShowTimer);
			}
		} else {
			header.classList.contains("_header-scroll")
				? header.classList.remove("_header-scroll")
				: null;
			if (headerShow) {
				header.classList.contains("_header-show")
					? header.classList.remove("_header-show")
					: null;
			}
		}
		scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
	});
}
headerScroll();

setTimeout(() => {
	if (addWindowScrollEvent) {
		let windowScroll = new Event("windowScroll");
		window.addEventListener("scroll", function (e) {
			document.dispatchEvent(windowScroll);
		});
	}
}, 0);

const swiper = new Swiper(".swiper", {
	loop: true,
	navigation: {
		nextEl: ".swiper-btn-1",
		prevEl: ".swiper-btn-2",
	},
});



const details = document.querySelectorAll("details");
window.addEventListener("resize", (e) => {
	details.forEach((obj) => {
		if (e.currentTarget.innerWidth < 945) {
			obj.removeAttribute("open");
		}
		if (e.currentTarget.innerWidth > 945 && !obj.hasAttribute("open")) {

			obj.setAttribute("open", "open");
		}
	});
});


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		})
	})
}