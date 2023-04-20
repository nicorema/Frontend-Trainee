const triple = (value: number | string) => {
  if (typeof value === "number") {
    return value * 3;
  }

  return value.repeat(3);
};

const el = document.getElementById("idk");

if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You did not pass in a word");
  }
};

const someDemo = (x: string | number, y: string | boolean) => {
  if (x === y) {
    x;
    y;
  }
};

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getDuration = (media: Movie | TVShow) => {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
};

const printFullDate = (date: string | Date) => {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toLocaleDateString());
  }
};

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

const printName = (entity: User | Company) => {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
};

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: number;
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return (animal as Cat).numLives != undefined;
};

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) {
    return "Meow";
  }

  return "Woof";
};

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case "rooster":
      return "Kikikiriki";
    case "cow":
      return "Mooo";
    case "pig":
      return "Oink";
    default:
      const shouldNeverGetHere: never = animal;
  }
};
