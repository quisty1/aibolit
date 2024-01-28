const cityBtn = document.getElementById('nav__btn'),
  modal = document.getElementById('modal'),
  modalClose = document.getElementById('close'),
  body = document.body,
  city = document.getElementsByClassName('modal__city'),
  burger = document.querySelector('.menu__icon'),
  menu = document.querySelector('.nav__links');

cityBtn.onclick = function () {
  modal.style.display = 'block';
  body.classList.add('_lock');
}

modalClose.onclick = function () {
  modal.style.display = 'none';
  body.classList.remove('_lock');
}

modal.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    body.classList.remove('_lock');
  }
}

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })
}
$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ]
  });
});

$(document).ready(function () {
  $('.history__slider').slick({
    slidesToShow: 6,
    infinite: false,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    draggable: false,
    responsive: [
      {
        breakpoint: 1367,
        settings: {
          slidesToShow: 4,
        }
      }
    ]
  });
});


