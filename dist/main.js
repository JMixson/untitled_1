// Navigation
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelector('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');

    // animate burger
    burger.classList.toggle('toggle');
  });
};

navSlide();

// Notifications
const notification = document.querySelector('.notification');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', () => {
  notification.classList.add('hidden');
});

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter form');

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();

  const newsletterText = document.querySelector('.newsletter p');
  newsletterText.textContent = 'Thanks for subscribing!';
  newsletterForm.remove();
});

// Modal
var openmodal = document.querySelectorAll('.modal-open');
for (var i = 0; i < openmodal.length; i++) {
  openmodal[i].addEventListener('click', function (event) {
    event.preventDefault();
    toggleModal();
  });
}

const overlay = document.querySelector('.modal-overlay');
overlay.addEventListener('click', toggleModal);

var closemodal = document.querySelectorAll('.modal-close');
for (var i = 0; i < closemodal.length; i++) {
  closemodal[i].addEventListener('click', toggleModal);
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ('key' in evt) {
    isEscape = evt.key === 'Escape' || evt.key === 'Esc';
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape && document.body.classList.contains('modal-active')) {
    toggleModal();
  }
};

function toggleModal() {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  modal.classList.toggle('opacity-0');
  modal.classList.toggle('pointer-events-none');
  body.classList.toggle('modal-active');
}
