'use strict'

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let number = $('#number-of-dogs').val();
    console.log(number);
    getDogImage(number);
  });
}

$(function() {
  console.log('app loaded');
  watchForm();
})