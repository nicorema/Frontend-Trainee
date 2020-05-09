//O(n)
function getMin(numbers) {
  let currentMinimum = Infinity;
  for (number of numbers) {
    if (number < currentMinimum) {
      currentMinimum = number;
    }
  }
  return currentMinimum;
}

//O(n^2)
function getMin2(numbers) {
  let sortedNumbers = [...numbers];

  for (let i = 0; i < sortedNumbers.length; ++i) {
    for (let j = i + 1; j < sortedNumbers.length; ++j)
      if (sortedNumbers[i] > sortedNumbers[j]) {
        [sortedNumbers[i], sortedNumbers[j]] = [
          sortedNumbers[j],
          sortedNumbers[i],
        ];
      }
  }

  return sortedNumbers[0];
}


//O(1)
function isEvenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

//O(n)
function sumUp(array){
  let sum = 0;
  for(numbers of array){
    sum+=numbers
  }
  return sum;
}

// console.log(getMin([1, 5, 10, -5, 3]));
// console.log(getMin2([1, 5, 10, -5, 3]));

// console.log(isEvenOrOdd(10));
// console.log(isEvenOrOdd(11));

// console.log(sumUp([2,1,3,4]));