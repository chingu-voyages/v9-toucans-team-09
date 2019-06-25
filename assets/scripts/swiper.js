$(document).ready(function() {
  //   console.log('ready!');
  initCards();
});

// variables

var $firstCard = $('.slide:first-child');
var $secondCard = $('.slide:nth-child(2)');
var $thirdCard = $('.slide:last-child');
var slideLeft, slideMiddle, slideRight;

//event Listeners
$($firstCard).on('click', moveLeft);
$($secodCard).on('click', initCards);
$($thirdCard).on('click', moveRight);

// functions

function initCards() {
  // remove active-card class from first and last cards. Make 2nd card active
  $($firstCard).removeClass('active-card');
  $($secondCard).addClass('active-card');
  $($thirdCard).removeClass('active-card');

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
  $($firstCard).addClass('active-card');
  $($secondCard).removeClass('active-card');
  $($thirdCard).removeClass('active-card');

  // position cards

  slideLeft = '45%';
  slideMiddle = '65%';
  slideRight = '85%';

  $($firstCard).css({ left: slideLeft });
  $($secondCard).css({ left: slideMiddle });
  $($thirdCard).css({ left: slideRight });
}

function moveRight() {
  // remove active-card class from first and last cards. Make 2nd card active
  $($firstCard).removeClass('active-card');
  $($secondCard).removeClass('active-card');
  $($thirdCard).addClass('active-card');

  // position cards

  slideLeft = '15%';
  slideMiddle = '25%';
  slideRight = '45%';

  $($firstCard).css({ left: slideLeft });
  $($secondCard).css({ left: slideMiddle });
  $($thirdCard).css({ left: slideRight });
}
