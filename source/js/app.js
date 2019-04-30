const portfolio = document.querySelector('.portfolio-cards');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');
const body = document.querySelector('body');
const img = document.querySelector('#modal-url');
const loader = document.querySelector('.loading');

document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
  particlesJS.load('particles-js', 'assets/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
});

close.addEventListener('click', e => {
  modal.classList.remove('show');
  body.style.overflowY = 'scroll';
});

portfolio.addEventListener('click', e => {
  const target = e.target;


  let parentNode;

  if(target.tagName === 'DIV') {
    parentNode = target.parentNode;
  }

  if(target.tagName === 'I') {
    parentNode = target.parentNode.parentNode;
  }

  if(parentNode.classList.contains('portfolio__item') ) {
    modal.classList.add('show');
    body.style.overflow = 'hidden';
    img.style.display = "none";
    loader.style.display = "block";

    img.onload = () => {
      loader.style.display = "none";
      img.style.display = "block";
    };

    let attrUrl = parentNode.getAttribute('data-url');

    img.setAttribute('src', `./assets/img/${attrUrl}.jpg`);
  }

  

  if(modal.classList.contains('show')) {
    modal.addEventListener("click", e => {
      if (e.target.classList.contains('modal')) {
        modal.classList.remove('show');
        body.style.overflowY = 'scroll';
      }
    })
  }
});
