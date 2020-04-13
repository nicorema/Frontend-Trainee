const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPPER = 'PAPPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK},${PAPPER} or ${SCISSORS}`,
    ''
  ).toLocaleUpperCase();
  if (selection != ROCK && selection != PAPPER && selection != SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPPER) ||
      (cChoice === PAPPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerSelection, playerSelection);
  } else {
    winner = getWinner(computerSelection);
  }
  let message = `You picked ${
    playerSelection || DEFAULT_USER_CHOICE
  }, computer picked ${computerSelection},therefore you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'win.';
  } else {
    message += 'lost.';
  }
  alert(message);
  gameIsRunning = false;
});

//Not game related

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;
  for (const num of numbers) {
    if (operation === 'SUM') {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + ' ' + result);
};

combine(
  showResult.bind(this, 'The Result after adding all numbers is:'),
  'SUM',
  1,
  5,
  10,
  -3,
  6,
  10
);
combine(
  showResult.bind(this, 'The Result after substracting all numbers is:'),
  'SUBSTRACT',
  1,
  5,
  10,
  -3,
  6,
  10
);
