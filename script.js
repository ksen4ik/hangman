const keyboard = [
  [
    {
      code: "KeyQ",
      letter: "Q",
    },
    {
      code: "KeyW",
      letter: "W",
    },
    {
      code: "KeyE",
      letter: "E",
    },
    {
      code: "KeyR",
      letter: "R",
    },
    {
      code: "KeyT",
      letter: "T",
    },
    {
      code: "KeyY",
      letter: "Y",
    },
    {
      code: "KeyU",
      letter: "U",
    },
    {
      code: "KeyI",
      letter: "I",
    },
    {
      code: "KeyO",
      letter: "O",
    },
    {
      code: "KeyP",
      letter: "P",
    },
  ],
  [
    {
      code: "KeyA",
      letter: "A",
    },
    {
      code: "KeyS",
      letter: "S",
    },
    {
      code: "KeyD",
      letter: "D",
    },
    {
      code: "KeyF",
      letter: "F",
    },
    {
      code: "KeyG",
      letter: "G",
    },
    {
      code: "KeyH",
      letter: "H",
    },
    {
      code: "KeyJ",
      letter: "J",
    },
    {
      code: "KeyK",
      letter: "K",
    },
    {
      code: "KeyL",
      letter: "L",
    },
  ],
  [
    {
      code: "KeyZ",
      letter: "Z",
    },
    {
      code: "KeyX",
      letter: "X",
    },
    {
      code: "KeyC",
      letter: "C",
    },
    {
      code: "KeyV",
      letter: "V",
    },
    {
      code: "KeyB",
      letter: "B",
    },
    {
      code: "KeyN",
      letter: "N",
    },
    {
      code: "KeyM",
      letter: "M",
    },
  ]
];


const words = [
  {
    question: "The birthplace of croissants:",
    answer: "FRANCE",
  },
  {
    question: "Domestic animal, man's true friend:",
    answer: "DOG",
  },
  {
    question: "Capital of Belarus:",
    answer: "MINSK",
  },
  {
    question: "Sports game with a ball:",
    answer: "FOOTBALL",
  },
  {
    question: "First month of the year:",
    answer: "JANUARY",
  },
  {
    question: "King of beasts:",
    answer: "LION",
  },
  {
    question: "Figure with no corners:",
    answer: "CIRCLE",
  },
  {
    question: "Tenth Zodiac Sign:",
    answer: "CAPRICORN",
  },
  {
    question: "The brightest star in the night sky:",
    answer: "SIRIUS",
  },
  {
    question: "It occupies 71% of the Earth's surface:",
    answer: "WATER",
  },
  {
    question: "Bald cat:",
    answer: "SPHINX",
  },
  {
    question: "Fruit:",
    answer: "APPLE",
  },
  {
    question: "Popular social network:",
    answer: "TELEGRAM",
  },
  {
    question: "Yellow plus blue:",
    answer: "GREEN",
  },
  {
    question: "Flower:",
    answer: "ROSE",
  },
  {
    question: "Rain plus sun:",
    answer: "RAINBOW",
  },
  {
    question: "Sport shoes:",
    answer: "SNEAKERS",
  },
  {
    question: "Best school to learn programming:",
    answer: "RSSCHOOL",
  },
  {
    question: "Name of this task:",
    answer: "HANGMAN",
  },
  {
    question: "Planet of the solar system:",
    answer: "MERCURY",
  },
];



const body = document.querySelector("body");

const wrapper = document.createElement("section");
wrapper.classList.add("gallows");

const gameTitleMobile = document.createElement("h1");
gameTitleMobile.classList.add("gallows__title");
gameTitleMobile.innerText = "Hangman Game";


// Left container with gallows and man
const gallowsImageContainer = document.createElement("div");
gallowsImageContainer.classList.add("gallows__image");
gallowsImageContainer.innerHTML = "<svg width='356' height='550' viewBox='0 0 356 550' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(#clip0_1_3)'><rect x='30' width='15' height='550' fill='black'/><rect y='43' width='15' height='356' transform='rotate(-90 0 43)' fill='black'/><rect x='300' y='43' width='7' height='60' fill='black'/><rect x='86.5685' y='30' width='15' height='80' transform='rotate(45 86.5685 30)' fill='black'/><g><circle class='man-part' cx='304' cy='133' r='30' fill='#777777'/><rect class='man-part' x='301.452' y='163' width='4' height='150' fill='#777777'/><rect class='man-part' x='301.452' y='161' width='3' height='100' transform='rotate(30 301.452 161)' fill='#777777'/><rect class='man-part' x='303.452' y='163.5' width='3' height='100' transform='rotate(-30 303.452 163.5)' fill='#777777'/><rect class='man-part' x='301.714' y='310' width='3' height='120' transform='rotate(25 301.714 310)' fill='#777777'/><rect class='man-part' x='302.452' y='311.268' width='3' height='120' transform='rotate(-25 302.452 311.268)' fill='#777777'/><g></g></svg>"


// Right container with question, answer and keyboard
const gallowsGame = document.createElement("div");
gallowsGame.classList.add("gallows__game");


// A title of the game
const gameTitle = document.createElement("h1");
gameTitle.classList.add("gallows__title");
gameTitle.innerText = "Hangman Game";


// Create a random question and answer for this question
const question = document.createElement("h2");
question.classList.add("gallows__question");
question.innerText = "";

const answer = document.createElement("div");
answer.classList.add("gallows__answer");

var randomIndex = Math.floor(Math.random() * words.length);
var randomQuestion = words[randomIndex].question;
var randomAnswer = words[randomIndex].answer;

question.innerText = randomQuestion;

console.log(randomAnswer);

var answerWord = randomAnswer.split("");
for (let i = 0; i < answerWord.length; i++) {
  var answerLetter = document.createElement("span");
  answerLetter.classList.add("answer__letter");
  answerLetter.setAttribute("data-letter", answerWord[i]);
  answerLetter.innerText = "_";
  answer.appendChild(answerLetter);
}

//////////////////////////////////////////////////////

// Create block showing, if user lost

const loser = document.createElement("section");
loser.classList.add("loser");
loser.classList.add("section-hidden");

const loserContent = document.createElement("div");
loserContent.classList.add("loser__content");

const loserTitle = document.createElement("h2");
loserTitle.classList.add("loser__title");
loserTitle.innerText = "Game over!\nYou lost!";

const loserAnswer = document.createElement("h3");
loserAnswer.classList.add("loser__answer");
loserAnswer.innerText = `Correct answer is\n${randomAnswer}`;

const loserReload = document.createElement("span");
loserReload.classList.add("reload");
loserReload.innerText = "Play again";

loserReload.addEventListener("click", () => {
  startNewGame();
})


// Create block showing, if user won

const winner = document.createElement("section");
winner.classList.add("winner");
winner.classList.add("section-hidden");

const winnerContent = document.createElement("div");
winnerContent.classList.add("winner__content");

const winnerTitle = document.createElement("h2");
winnerTitle.classList.add("winner__title");
winnerTitle.innerText = "Congratulations!\nYou won!";

const winnerAnswer = document.createElement("h3");
winnerAnswer.classList.add("winner__answer");
winnerAnswer.innerText = `Correct answer is\n${randomAnswer}`;

const winnerReload = document.createElement("span");
winnerReload.classList.add("reload");
winnerReload.innerText = "Play again";

winnerReload.addEventListener("click", () => {
  startNewGame();
})

//////////////////////////////////////////////////////


// Create a wrong answer counter
const incorrectGuess = document.createElement("div");
incorrectGuess.classList.add("gallows__guess");

const incorrectGuessText = document.createElement("h3");
incorrectGuessText.classList.add("gallows__guess-text");
incorrectGuessText.innerText = "Incorrect guesses: "

const incorrectGuessCounter = document.createElement("h3");
incorrectGuessCounter.classList.add("gallows__guess-counter");
var incorrectCount = 0;
const maxCount = 6;
incorrectGuessCounter.innerText = `${incorrectCount} / ${maxCount}`;


// Create a keyboard
const keyboardContainer = document.createElement("div");
keyboardContainer.classList.add("gallows__keyboard");

keyboard.forEach(row => {
  const keyboardRow = document.createElement("div");
  keyboardRow.classList.add("gallows__keyboard-row");
  row.forEach(key => {
    var keyElement = document.createElement("span");
    keyElement.classList.add("keyboard__key");
    keyElement.classList.add("keyboard-item");
    keyElement.textContent = key.letter;
    // Checking the entered letters and their output by virtual keyboard
    keyElement.addEventListener("click", () => handleKeyClick(key.letter));
    keyboardRow.appendChild(keyElement);
  });
  keyboardContainer.appendChild(keyboardRow);
});


// Checking the entered letters and their output by real keyboard
document.addEventListener("keypress", (event) => {
  const eventCode = event.code;
  let foundLetter;
  for (let i = 0; i < keyboard.length; i++) {
    for (let j = 0; j < keyboard[i].length; j++) {
      if (keyboard[i][j].code === eventCode) {
        foundLetter = keyboard[i][j];
        break;
      }
    }
    if (foundLetter) {
      const letter = foundLetter.letter;
      handleKeyClick(letter)
    }
  }
});


// Function for checking the entered letters and their output
function handleKeyClick(keyLetter) {
  var keyboardLetters = document.querySelectorAll(".keyboard__key");
  keyboardLetters.forEach(keyboardLetter => {
    if (keyboardLetter.textContent == keyLetter && !keyboardLetter.classList.contains("key-true") && !keyboardLetter.classList.contains("key-false")) {
      if (randomAnswer.includes(keyLetter)) {
        var answerLetters = document.querySelectorAll(".answer__letter");
        answerLetters.forEach((letter) => {
          if (letter.getAttribute("data-letter") == keyLetter) {
            letter.innerText = keyLetter;
            letter.classList.add("correct-letter");
            keyboardLetter.classList.add("key-true");
            keyboardLetter.classList.remove("keyboard-item");
          }
        })
        var answerLettersArray = Array.from(answerLetters);
        const isEveryLetterCorrect = answerLettersArray.every((letter) => {
          return letter.classList.contains("correct-letter");
        });

        if (isEveryLetterCorrect) {
          winner.classList.remove("section-hidden");
          body.classList.add("lock");
        }
      } else {
        incorrectCount++;
        incorrectGuessCounter.innerText = `${incorrectCount} / ${maxCount}`;

        const manParts = document.getElementsByClassName("man-part");
        manParts[incorrectCount-1].style.display = "block";

        if (incorrectCount == maxCount) {
          loser.classList.remove("section-hidden");
          body.classList.add("lock");
        }

        keyboardLetter.classList.add("key-false");
        keyboardLetter.classList.remove("keyboard-item");
      }
    }
  })
}


// Function for button "Play again"
function startNewGame() {
  // 
  console.clear();

  randomIndex = Math.floor(Math.random() * words.length);
  randomQuestion = words[randomIndex].question;
  randomAnswer = words[randomIndex].answer;

  while (randomQuestion === question.innerText) {
    randomIndex = Math.floor(Math.random() * words.length);
    randomQuestion = words[randomIndex].question;
    randomAnswer = words[randomIndex].answer;
  }

  question.innerText = randomQuestion;
  console.log(randomAnswer);

  answer.innerText = "";

  var answerWord = randomAnswer.split("");
  for (let i = 0; i < answerWord.length; i++) {
    var answerLetter = document.createElement("span");
    answerLetter.classList.add("answer__letter");
    answerLetter.setAttribute("data-letter", answerWord[i]);
    answerLetter.innerText = "_";
    answer.appendChild(answerLetter);
  }

  //
  incorrectCount = 0;
  incorrectGuessCounter.innerText = `${incorrectCount} / ${maxCount}`;

  //
  const mansParts = document.querySelectorAll(".man-part");
  mansParts.forEach(mansPart => {
    mansPart.style.display = "none";
  })

  //
  const answerLetters = document.querySelectorAll(".answer__letter");
  answerLetters.forEach(answerLetter => {
    if (answerLetter.classList.contains("correct-letter")) {
      answerLetter.classList.remove("correct-letter");
      answerLetter.innerText = "_";
    }
  })

  //
  const keyboardKeys = document.querySelectorAll(".keyboard__key");
  keyboardKeys.forEach(keyboardKey => {
    keyboardKey.classList.add("keyboard-item");
    if (keyboardKey.classList.contains("key-true")) {
      keyboardKey.classList.remove("key-true");
    } else if (keyboardKey.classList.contains("key-false")) {
      keyboardKey.classList.remove("key-false");
    }
  })

  //
  if (!winner.classList.contains("section-hidden")) {
    winner.classList.add("section-hidden");
    body.classList.remove("lock");
  } else if (!loser.classList.contains("section-hidden")) {
    loser.classList.add("section-hidden");
    body.classList.remove("lock");
  }

  loserAnswer.innerText = `Correct answer is\n${randomAnswer}`;
  winnerAnswer.innerText = `Correct answer is\n${randomAnswer}`;
}



incorrectGuess.appendChild(incorrectGuessText);
incorrectGuess.appendChild(incorrectGuessCounter);
gallowsGame.appendChild(gameTitle);
gallowsGame.appendChild(question);
gallowsGame.appendChild(answer);
gallowsGame.appendChild(incorrectGuess);
gallowsGame.appendChild(keyboardContainer);
wrapper.appendChild(gameTitleMobile);
wrapper.appendChild(gallowsImageContainer);
wrapper.appendChild(gallowsGame);
body.appendChild(wrapper);
winner.appendChild(winnerContent)
winnerContent.appendChild(winnerTitle);
winnerContent.appendChild(winnerAnswer);
winnerContent.appendChild(winnerReload);
body.appendChild(winner);
loser.appendChild(loserContent);
loserContent.appendChild(loserTitle);
loserContent.appendChild(loserAnswer);
loserContent.appendChild(loserReload);
body.appendChild(loser);
