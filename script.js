'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Smooth Scroling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//document methods
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//select Elements
const header = document.querySelector('.header');
//this creates a NodeList which doesn't update automatically
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//get Elements by ...
document.getElementById('section--1');
//this creates a live HTMLColection which updates automatically
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//create and insert Elements
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
//message.textContent('We use cookies for improved functionality and analytics.');
message.innerHTML =
  'We use cookies for improved functionality and analytics.<button class = "btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//delete Elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();

    // message.parentElement.removeChild(message);
  });

//STYLES
message.style.backgroundColor = '#37383d';
//message.style.width = '100%';

console.log(message.style.color);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
//Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'd');
logo.classList.remove('c', 'd');
logo.classList.toggle('c');
logo.classList.contains('c');

//Don't use since it will overight
//logo.className='c'

//PAGE DIRECTIONS
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log(
//   'Current scrol (X/Y)',
//   window.pageXOffset,
//   window.AbortSignalpageYOffset
// );
// console.log(
//   'Height/Weight viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

//Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });
