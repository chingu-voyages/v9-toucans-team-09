$(document).ready(function() {
  //   console.log('ready!');
  initCards();
});

// variables

var $firstCard = $('#slide-1');
var $secondCard = $('#slide-2');
var $thirdCard = $('#slide-3');
var slideLeft, slideMiddle, slideRight;
var $burgerMenu = $('#hamburger');

//event Listeners
$($burgerMenu).on('click', showMenu);
$($firstCard).on('click', moveLeft);
$($secondCard).on('click', initCards);
$($thirdCard).on('click', moveRight);

//Keypress
$($firstCard).on('keyup', checkKey);
$($secondCard).on('keyup', checkKey);
$($thirdCard).on('keyup', checkKey);

// functions

//Mobile Menu
function showMenu() {}

function initCards() {
  // remove active-card class from first and last cards. Make 2nd card active
  $($firstCard).removeClass('active-card');
  $($secondCard).addClass('active-card');
  $($thirdCard).removeClass('active-card');
  $('.slide').removeClass('shrink-card');

  // position cards

  slideLeft = '15%';
  slideMiddle = '35%';
  slideRight = '55%';

  $($firstCard).css({ left: slideLeft });
  $($secondCard).css({ left: slideMiddle });
  $($thirdCard).css({ left: slideRight });
}

function moveLeft() {
  // remove active-card class from first and last cards. Make 2nd card active
  $('.slide').removeClass('shrink-card');
  $($firstCard).addClass('active-card');
  $($secondCard).removeClass('active-card');
  $($thirdCard).removeClass('active-card');
  $($thirdCard).addClass('shrink-card');

  // position cards

  slideLeft = '35%';
  slideMiddle = '55%';
  slideRight = '75%';

  $($firstCard).css({ left: slideLeft });
  $($secondCard).css({ left: slideMiddle });
  $($thirdCard).css({ left: slideRight });
}

function moveRight() {
  // remove active-card class from first and last cards. Make 2nd card active
  $('.slide').removeClass('shrink-card');
  $($firstCard).removeClass('active-card');
  $($secondCard).removeClass('active-card');
  $($thirdCard).addClass('active-card');
  $($firstCard).addClass('shrink-card');

  // position cards

  slideLeft = '5%';
  slideMiddle = '25%';
  slideRight = '45%';

  $($firstCard).css({ left: slideLeft });
  $($secondCard).css({ left: slideMiddle });
  $($thirdCard).css({ left: slideRight });
}

// Key press

function checkKey(event) {
  switch (event.keyCode) {
    case 37:
      alert('Left key pressed');
      break;
    case 38:
      alert('Up key pressed');
      break;
    case 39:
      alert('Right key pressed');
      break;
    case 40:
      alert('Down key pressed');
      break;
  }
}

function mobileMenu() {
  var x = document.getElementById('mobile-dropdown');
  var y = document.getElementById('hamburger');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.justifySelf = 'right';
  } else {
    x.style.display = 'flex';
    y.style.justifySelf = 'center';
  }
}
