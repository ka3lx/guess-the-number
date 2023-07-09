const correctAnswer = Math.floor(Math.random() * 101),
  guesses = [];
let numberOfAttempts = 0,
  gameOver = false;

function checkGuess() {
  const input = document.querySelector("#guess-input"),
    submit = document.querySelector("#submit");
  guess = Number(input.value) || 0;
  let message = "",
    type = "",
    previousGuessesPara,
    messagePara,
    startNewGameButton;

  guesses.push(guess);
  numberOfAttempts++;

  if (numberOfAttempts > 10) {
    message = "GAME OVER!!!";
    type = "wrong";
    gameOver = true;
  } else {
    if (guess === correctAnswer) {
      message = "You got it right!";
      gameOver = true;
      type = "correct";
    } else if (guess < correctAnswer) {
      message = "Guess is too low";
      type = "wrong";
    } else {
      message = "Guess is too high";
      type = "wrong";
    }
  }

  if (numberOfAttempts === 1) {
    previousGuessesPara = document.createElement("p");
    messagePara = document.createElement("p");
    startNewGameButton = document.createElement("button");
    startNewGameButton.textContent = "Start a new game";

    previousGuessesPara.setAttribute("id", "previous-guesses");
    messagePara.setAttribute("id", "message");

    document.body.appendChild(previousGuessesPara);
    document.body.appendChild(messagePara);
    document.body.appendChild(startNewGameButton);
  } else {
    previousGuessesPara = document.querySelector("#previous-guesses");
    messagePara = document.querySelector("#message");
  }

  previousGuessesPara.textContent = getPreviousGuesses();
  messagePara.textContent = message;
  messagePara.setAttribute("class", type);

  if (gameOver) {
    submit.disabled = true;
  }
}

function getPreviousGuesses() {
  let message = "Previous guesses: ";
  for (const guess of guesses) {
    message += " " + guess;
  }
  return message;
}

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", checkGuess);
