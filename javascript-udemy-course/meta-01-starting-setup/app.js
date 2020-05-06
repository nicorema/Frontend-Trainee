//Library Land
const uid = Symbol('uid');

const person = {
  //id: 'p1',
  [uid]: 'p1',
  name: 'Max',
  age: 30,
  [Symbol.toStringTag]: 'Person',
};

person[uid] = 'p3';

//Developer uses the library and can't edit the uid

// console.log(person);
// console.log(person.toString());

const company = {
  currEmployee: 0,
  employees: ['Max', 'Manu', 'Anna'],
  //   next() {
  //     if (this.currEmployee >= this.employees.length) {
  //       return { value: this.currEmployee, done: true };
  //     }
  //     const returnValue = {
  //       value: this.employees[this.currEmployee],
  //       done: false,
  //     };
  //     this.currEmployee++;
  //     return returnValue;
  //   },
  [Symbol.iterator]: function* employeeGenerator() {
    let currEmployee = 0;
    while (currEmployee < this.employees.length) {
      yield this.employees[currEmployee];
      currEmployee++;
    }
  },
};

for (const employee of company) {
  console.log(employee);
}
// const it = company.getEmployee();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

//Reflect API
const course = {
  title: 'Js - Course',
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

console.log(course.toString());

//Proxy API

const courseHandler = {
  get(obj, propertyName) {
    return obj[propertyName] || 'Trap - not existing';
  },

  set(obj, property, newValue) {
    if (property === 'rating') {
      return;
    }
    obj[property] = newValue;
  },
};
const pCourse = new Proxy(course, courseHandler);
pCourse.rating = 5;

console.log(pCourse.title);
console.log(pCourse.rating);
