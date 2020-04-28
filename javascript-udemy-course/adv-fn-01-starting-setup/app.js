//Pure function
function add(num1, num2) {
  return num1 + num2;
}

//Inpure Function
function addRandom(num1) {
  return num1 + Math.random();
}

//Inpure Function (Sid Effect)
let prevResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  prevResult = sum;
  return sum;
}

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(200));

let username = 'Nico';
function greetUser() {
  let name = 'Anna';
  console.log('Hi ' + name);
}
username = 'Nicolás';
let name = 'Caro';
greetUser();

function powerOff(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOff(x, n - 1);
}

console.log(powerOff(2, 3));

const myself = {
    name: 'Max',
    friends: [
      {
        name: 'Manuel',
        friends: [
          {
            name: 'Chris',
            friends: [
              {
                name: 'Hari'
              },
              {
                name: 'Amilia'
              }
            ]
          }
        ]
      },
      {
        name: 'Julia'
      }
    ]
  };
  
  function getFriendNames(person) {
    const collectedNames = [];
  
    if (!person.friends) {
      return [];
    }
    
    for (const friend of person.friends) {
      collectedNames.push(friend.name);
      collectedNames.push(...getFriendNames(friend));
    }
    
    return collectedNames;
  }
  
  console.log(getFriendNames(myself));