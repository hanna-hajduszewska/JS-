'use strict';

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
	e.preventDefault();
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

// Button scroll
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
	const s1coords = section1.getBoundingClientRect();

	section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation scroll
document.querySelector('.nav__links').addEventListener('click', function (e) {
	if (e.target.classList.contains('nav__link')) {
		e.preventDefault();
		const id = e.target.getAttribute('href');
		console.log(id);
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
	}
});

//Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
	const clicked = e.target.closest('.operations__tab');

	if (!clicked) return;

	tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
	clicked.classList.add('operations__tab--active');

	tabsContent.forEach((c) =>
		c.classList.remove('operations__content--active')
	);

	document
		.querySelector(`.operations__content--${clicked.dataset.tab}`)
		.classList.add('operations__content--active');
});
