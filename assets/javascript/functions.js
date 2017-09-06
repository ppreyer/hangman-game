// Create an object to store global values
var gameObject = {
  guessesLeft: 10,
  characters: ['mario', 'donkey kong', 'link', 'samus', 'yoshi', 'kirby', 'fox', 'pikachu', 'luigi', 'captain falcon', 'ness', 'jigglypuff'],
  guessCharacter: [],
  randomCharacter: '',
  userGuess: '',
  wrongGuesses: [],
  userStatus: '',
  wins: 0
};

function displayGameElements() {
  document.getElementById('guessesLeft').innerHTML = gameObject.guessesLeft;
  document.getElementById('wins').innerHTML = gameObject.wins;
  document.getElementById('wrongGuesses').innerHTML = gameObject.wrongGuesses.join('');
}

// Create a function to select a character at random from the array in gameObject
function selectCharacter() {
  // Generate a random number based on the length of the characters array in gameObject
  var randomNumber = Math.floor(Math.random() * gameObject.characters.length);
  // Set the randomCharacter key value equal to the index number generated above
  gameObject.randomCharacter = gameObject.characters[randomNumber];
}

// Create a function to format the selected character into '-'
function formatCharacter() {
  // Iterate through the random character chosen in the gameObject
  for(var i = 0; i < gameObject.randomCharacter.length; i++) {
    // Turn guessCharacter array into the length of the randomCharacter chosen displaying as '-'
    gameObject.guessCharacter[i] = '-';
  }
  // Grab the HTML element and turn the array of dashes into a string with no spaces
  document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('');
}

window.onload = function() {
  selectCharacter();
  formatCharacter();
  displayGameElements();
}

// Create a function to store the user's guess in the gameObject
var letterGuess = document.onkeyup = function(event) {
  gameObject.userGuess = event.key; 
  checkGuess();
  checkGameStatus();
  displayCharacterImage();
  resetGame();
}


// Create a function to check if letter guessed is in the smash bro character
function checkGuess() {
  if(gameObject.wrongGuesses.indexOf(gameObject.userGuess) !== -1) {
    return 
  }
  // Conditional - check if the letter guessed is in the selected character (string)
  if(gameObject.randomCharacter.indexOf(gameObject.userGuess) === -1) {
    // If not then push the user's guess into the wrong guess array
    gameObject.wrongGuesses.push(gameObject.userGuess);
    // Subtract one from guesses left for the user
    gameObject.guessesLeft--;
    // Display the wrong guess array as a string separated by ','
    document.getElementById('wrongGuesses').innerHTML = gameObject.wrongGuesses.join(', ');
    // Display the remaining guesses left to the user
    document.getElementById('guessesLeft').innerHTML = gameObject.guessesLeft;
  } else {
      // Iterate through the random character string chosen stored in gameObject
      for(var j = 0; j < gameObject.randomCharacter.length; j++) {
        // Store each index as a letter
        var letter = gameObject.randomCharacter[j];
        // Conditional - check if user guess equals the letter index
        if(gameObject.userGuess === letter) {
          // If yes then set the index in the array filled with dashes equal to the user's guess
          gameObject.guessCharacter[j] = gameObject.userGuess;  
        }
      }
      // Outside of the loop display the correct guessed letter and turn the array into a string without any separation
      document.getElementById('currentGuess').innerHTML = gameObject.guessCharacter.join('');
    }
}

// Create a function to check if the user has won or lost
function checkGameStatus() {
  // Conditional - check if user has any remaining guesses
  if(gameObject.guessesLeft <= 0) {
    // If not then change the user status to lost
    gameObject.userStatus = 'lost';
    // Else check if the character guess (convert to string) matches the random character selected (string)
  } else if(gameObject.guessCharacter.join('') === gameObject.randomCharacter) {
    // If yes then add one to the user's win count
    gameObject.wins++;
    // Change the user's status to winner
    gameObject.userStatus = 'winner';
  }
}

function displayCharacterImage() {
  if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'mario') {
    document.getElementById('character').src='assets/images/mario.png';
  } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'captain falcon') {
      document.getElementById('character').src='assets/images/captain_falcon.png';
    } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'donkey kong') {
        document.getElementById('character').src='assets/images/donkey_kong.png';
      } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'fox') {
          document.getElementById('character').src='assets/images/fox.png';
        } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'jiggly puff') {
            document.getElementById('character').src='assets/images/jiggly_puff.png';
          } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'kirby') {
              document.getElementById('character').src='assets/images/kirby.png';
             } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'link') {
                document.getElementById('character').src='assets/images/link.png';
              } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'luigi') {
                    document.getElementById('character').src='assets/images/luigi.png';
                  } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'ness') {
                      document.getElementById('character').src='assets/images/ness.png';
                    } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'pikachu') {
                        document.getElementById('character').src='assets/images/pikachu.png';
                      } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'samus') {
                          document.getElementById('character').src='assets/images/samus.png';
                        } if(gameObject.userStatus === 'winner' && gameObject.randomCharacter === 'yoshi') {
                            document.getElementById('character').src='assets/images/yoshi.png';
                          }
}

// Create a function to reset the appropriate values stored in the gameObject's keys
function resetGame() {
  if(gameObject.userStatus === 'winner' || gameObject.userStatus === 'lost') {
    gameObject.guessesLeft = 10;
    gameObject.guessCharacter = [];
    gameObject.randomCharacter = '';
    gameObject.userGuess = '';
    gameObject.wrongGuesses = [];
    gameObject.userStatus = '';
    displayGameElements();
    selectCharacter();
    formatCharacter();
  }
}

