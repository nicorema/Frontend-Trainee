class Course {
  #_price;
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  get price() {
    return '$' + this.#_price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid price';
    } else {
      this.#_price = value;
    }
  }

  lengthPrice() {
    return this.length / this.#_price;
  }

  courseSummary() {
    return `
      Title: ${this.title}
      Length: ${this.length}
      Price: ${this.#_price}
      `;
  }
}

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log('Something');
  }
}

const javascriptCourse = new Course('Javascript', 36, 9.99);
const reactCourse = new Course('React', 80, 29.99);

const practicalJsCourse = new PracticalCourse('Javascript', 20, 10, 40);
const theoricalJsCourse = new TheoreticalCourse('Javascript', 20, 10);

console.log(javascriptCourse, reactCourse);
console.log(reactCourse.courseSummary());
console.log(reactCourse.lengthPrice());

console.log(practicalJsCourse.courseSummary());
theoricalJsCourse.publish();
