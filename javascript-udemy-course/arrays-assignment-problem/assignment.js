const numbers = [10, 6, 4, 13, 71, 2];
const filteredNumbers = numbers.filter(number => number > 5);
const mappedNumbers = numbers.map(number => ({ num: number }));
const reducedValue = numbers.reduce((prevVal, nextVal) => prevVal * nextVal, 1);

const findMax = (...list) => {
    return [Math.min(...list),Math.max(...list)];
}

const[min,max]=findMax(...numbers);

const set = new Set([1,1,1,1,1,2]);

console.log(numbers);
console.log(filteredNumbers);
console.log(mappedNumbers);
console.log(reducedValue);

console.log(min,max);
console.log(set);


