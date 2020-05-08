const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

function validate(value, flag, validatorValue) {
  if (flag === REQUIRED) {
    return value.trim().length > 0;
  }
  if (flag === MIN_LENGTH) {
    return value.trim().length > validatorValue;
  }
}

function getUserInput(inputElement) {
  return document.getElementById(inputElement).value;
}

function createUser(username, password) {
  if (!validate(username, REQUIRED)) {
    throw new Error('Invalid - username must not be empty');
  }
  if (!validate(password, MIN_LENGTH, 5)) {
    throw new Error('Invalid - password must be six characters or longer');
  }
  return {
    username,
    password,
  };
}

function greetUser(user){
  console.log('Hi, I am ' + user.username)
}

function signUpHandler(event) {
  event.preventDefault();
  const enteredUserName = getUserInput('username');
  const enteredUserPassword = getUserInput('password');

  try {
    const newUser = createUser(enteredUserName, enteredUserPassword);
    console.log(newUser);
    greetUser(newUser);
  } catch (err) {
   alert(err.message);
  }
}

function connectForm(formId, formSubmitHandler) {
  const form = document.getElementById(formId);
  form.addEventListener("submit", formSubmitHandler);
}

connectForm('user-input', signUpHandler);
