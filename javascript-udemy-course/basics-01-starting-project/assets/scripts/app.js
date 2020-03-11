const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOuput(operator, resultBeforeCalc, calcNumber) {
  console.log(resultBeforeCalc);
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}
function add() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOuput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function substract() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOuput('-', initialResult, enteredNumber);
  writeToLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOuput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOuput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
