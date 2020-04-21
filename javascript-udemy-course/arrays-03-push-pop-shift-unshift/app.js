// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();

// hobbies.splice(10,0,'Good Food','Mamma mia!');

// const removed = hobbies.splice(0,1);
// console.log(hobbies,removed)

//const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
//const storedResults = testResults.slice(-4,-3);
// const storedResults = testResults.concat('jelou','da');

// console.log(testResults.indexOf(1.5));
// console.log(testResults, storedResults);

// const personData = [{ name: 'Nico' }, { name: 'Max' }];
// console.log(personData.indexOf({ name: 'Nico' }));

// const NicoData = personData.find((person, index, persons) => {
//   return person.name === 'Nico';
// });

// console.log(NicoData);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
//const taxAdjustedPrices = [];

// prices.forEach((price, index, prices) => {
//   taxAdjustedPrices.push(price * (1 + tax));
// });

// const taxAdjustedPrices = prices.map(
//   (price, index, prices) => (price *= tax + 1)
// );
// console.log(prices);

// const sortedPrices = prices.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);

// const filteredArray = prices.filter(p => p > 6);

// console.log(filteredArray);

// const reducedPrice = prices.reduce(
//   (prevVal, currentVal, currentIndex, prices) => {
//     return prevVal + currentVal;
//   },
//   0
// );

// console.log(reducedPrice);

// const data = 'new york;10.99;2000';

// const transformedData = data.split(';');

// const nameFragments = ['Nico','Restrepo'];
// const name = nameFragments.join(' ');

// const copiedNameFragments = [...nameFragments];

// const nameFragments = ['Nico', 'Restrepo',24,'Iron Maiden'];
// const [name,lastName,...otherInformation] = nameFragments;

// console.log(name);
// console.log(lastName);
// console.log(otherInformation);
