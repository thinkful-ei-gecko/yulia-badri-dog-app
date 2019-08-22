'use strict';

function displayDog(responseJson) {
  console.log(responseJson);
  $('.results').empty();
  //replace the existing image with the new one
  let image = responseJson.message;
  image.forEach(function(i) {
    $('.results').append(
      `<img src="${i}" class="results-img">`
    );
  });

  // $('.results-img').replaceWith(
  //   `<img src="${responseJson.message}" class="results-img">`
  //)
  //display the results section
  $('.results').removeClass('hidden');
 
}

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayDog(responseJson));
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
});