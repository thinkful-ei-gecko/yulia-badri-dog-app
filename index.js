'use strict';

function displayDog(responseJson) {
  $('.results').empty();
  //replace the existing image with the new one
  let image = responseJson.message;
  image.forEach(function(i) {
    $('.results').append(
      `<img src="${i}" class="results-img">`
    );
  });
  $('.results').removeClass('hidden');
}


function displayBreed(responseJson) {
  $('.results').empty();
  if (responseJson.status === 'error'){
    $('.results').append(`<p>  Please enter a valid dog breed.</p>`);
  }
  else {
  //replace the existing image with the new one
    $('.results').append(
      `<img src="${responseJson.message}" class="results-img">`
    );
  }
  $('.results').removeClass('hidden');
}

function getBreed(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
  .then(response => response.json())
  .then(responseJson => displayBreed(responseJson));
}

function getDogImage(num) {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
    .then(response => response.json())
    .then(responseJson => displayDog(responseJson));
} 

function watchForm() {
  $('.getNum').on('click', event => {
    let number = $('#number-of-dogs').val();
    getDogImage(number);
  });
}

function watchSearch(){
  $('.search').on('click', function(event) { 
  let breed = $('#breed-search').val();
  $('#breed-search').val('');
  console.log(breed);

  getBreed(breed);
  });
}

$(function() {
  watchForm();
  watchSearch();
});