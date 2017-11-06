$(document).ready(function() {

  var guessCount = 0;
  var num = getRandom();
  console.log(num)

  function getRandom() {
    return Math.round(Math.random() * (100 - 0) + 0);
  }

  function checkGuess(guess) {
    if (guess > num) {
      alert("Too high, guess again")
    } else if (guess < num){
      alert("Too low, guess again")
    } else if (guess == num) {
      alert("Awesome picking! You got it!")
      location.reload()
    }
  }

// This code uses jQuery, a javascript library, to run.
// You don't need to know how this works,
// just that it makes the submit button function.
  $('.guessingForm').submit(function(event) {
    event.preventDefault();
    var guess = $('#js-user-guess').val();
    $('#js-user-guess').val('');
    checkGuess(guess);
    guessCount++;
    $('.guessCount').text(guessCount)
  });
// document.ready end
});

// Possible additions
// 1. Tracking number of guesses
// 2. Hot or cold (more if statements)
// 3. New game/reset button
