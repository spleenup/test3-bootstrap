var body = document.querySelector('body');
body.classList.remove('no-js');

var formOpenBtn = document.querySelector('.header-feedback-link');
var feedbackForm = document.querySelector('.feedback');
var formCloseBtn = document.querySelector('.feedback-close-btn');
var input = document.querySelectorAll('.feedback-input');

function showForm(event) {
  event.preventDefault();
  body.classList.add('overlay');
  document.body.style.overflow = 'hidden';
  feedbackForm.classList.add('feedback-visible');
  input[0].focus();
  feedbackForm.classList.add('feedback-animate');
}

function closeForm(event) {
  event.preventDefault();
  feedbackForm.classList.remove('feedback-animate');
  feedbackForm.classList.remove('feedback-visible');
  document.body.style.overflow = 'auto';
  body.classList.remove('overlay');
}

function closeFormEsc(event) {
  if (event.keyCode == 27) {
    feedbackForm.classList.remove('feedback-animate');
    feedbackForm.classList.remove('feedback-visible');
    body.classList.remove('overlay');
  }
}

formOpenBtn.addEventListener('click', showForm);
formCloseBtn.addEventListener('click', closeForm);
window.addEventListener('keydown', closeFormEsc);