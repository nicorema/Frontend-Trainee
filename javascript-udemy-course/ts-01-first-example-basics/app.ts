// class User {
//   name: string; //default public
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}
  print() {
    console.log(this.name);
  }
}
class Admin extends User {
  constructor(name: string, age: number, private permissons: string[]) {
    super(name, age);
  }
}
const user = new User('Nico', 25);
console.log(user);

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = document.getElementById('num2') as HTMLInputElement;
const btn = document.querySelector('button')!;

function add(a: number, b: number) {
  return a + b;
}
enum OutputMode {
  CONSOLE,
  ALERT,
}
type printMode = OutputMode.CONSOLE | OutputMode.ALERT;
function printResult(result:any, printMode: printMode) {
  if (printMode === OutputMode.CONSOLE) {
    console.log(result);
  } else if (printMode === OutputMode.ALERT) {
    alert(result);
  }
}
const result = add(5, 3);

interface CalculationContainer {
  res: number;
  print(): void;
}

type CalculationResults = CalculationContainer[];

const results: CalculationResults = [];

btn.addEventListener('click', () => {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultContainer = {
    res: result,
    print() {
      console.log(this.res);
    },
  };
  results.push(resultContainer);
  results[0].print();
  printResult(result, OutputMode.CONSOLE);
  printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(val : T) {
  console.log(val);
  return val;
}

logAndEcho<string>('Hi There').split(' ');
