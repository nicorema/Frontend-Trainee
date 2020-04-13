let randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
while (randomNumber > 0.7) {
  console.log('time');
  randomNumber = Math.random();
}
console.log(randomNumber);

const array = [0, 1, 2, 3, 4, 5];
for (let i = 0; i < array.length; ++i) {
  console.log(array[i]);
}
for (const item of array) {
  console.log(item);
}
for (let i = array.length -1; i > 0; --i) {
  console.log(array[i]);
}

let secondRandomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

while (secondRandomNumber < 0.7 && randomNumber < 0.7) {
  console.log('time');
  randomNumber = Math.random();
  secondRandomNumber = Math.random();
}
console.log(randomNumber);
console.log(secondRandomNumber);

randomNumber = secondRandomNumber = 1;
while (secondRandomNumber >= 0.2 || randomNumber >= 0.2) {
  console.log('time');
  randomNumber = Math.random();
  secondRandomNumber = Math.random();
}
console.log(randomNumber);
console.log(secondRandomNumber);
