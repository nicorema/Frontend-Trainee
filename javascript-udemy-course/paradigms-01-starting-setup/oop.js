class Validator {
  static REQUIRED = 'REQUIRED';
  static MIN_LENGTH = 'MIN_LENGTH';
  static validate(value, flag, validatorValue) {
    if (flag === this.REQUIRED) {
      return value.trim().length > 0;
    }
    if (flag === this.MIN_LENGTH) {
      return value.trim().length > validatorValue;
    }
  }
}

class User {
  constructor(username,password){
    this.username = username;
    this.password = password;
  }

  greet(){
    console.log('Hi, I am ' + this.username)
  }
}

class UserInputForm {
  constructor() {
    this.form = document.getElementById('user-input');
    this.userNameInput = document.getElementById('username');
    this.passwordInput = document.getElementById('password');
    this.form.addEventListener('submit', this.signUpHandler.bind(this));
  }

  signUpHandler(event) {
    event.preventDefault();
    const enteredUsername = this.userNameInput.value;
    const enteredPassword = this.passwordInput.value;

    if (!Validator.validate(enteredUsername, Validator.REQUIRED)) {
      alert('Invalid - username must not be empty');
      return;
    }
    if (!Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)) {
      alert('Invalid - password must be six characters or longer');
      return;
    }  
    const newUser = new User(enteredUsername,enteredPassword);  
    console.log(newUser);
    newUser.greet();
  }
}

new UserInputForm();