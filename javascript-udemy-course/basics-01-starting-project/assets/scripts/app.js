const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function createAndWriteOuput(operator, resultBeforeCalc, calcNumber) {
  console.log(resultBeforeCalc);
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
}

function calculateResult(calculationType) {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  let mathOperator = '';
  if (calculationType === 'ADD' || calculationType === 'SUBSTRACT' || calculationType === 'MULTIPLY' || calculationType === 'DIVIDE') {
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperator = '+';
    } else if (calculationType === 'SUBSTRACT') {
      currentResult -= enteredNumber;
      mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }
  }
  createAndWriteOuput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add() {
  calculateResult('ADD');
}

function substract() {
  calculateResult('SUBSTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
