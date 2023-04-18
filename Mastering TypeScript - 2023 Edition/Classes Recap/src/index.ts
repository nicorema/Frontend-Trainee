class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }

    this._score = newScore;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const player1 = new Player("Reed", "Skiba", 0);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}

  print(): void {
    console.log(this.color, this.brand);
  }
}

const bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "Black");

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "Black", 95000);
const bill = new PartTimeEmployee("Bill", "Billian", 24, 11000);
