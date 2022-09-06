// Typeof Narrowing:
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards

const el = document.getElementById("#idk");

if (el) {
  console.log(el);
}

const printLetter = (word?: string) => {
  if (word) {
    console.log(word);
  } else {
    console.log(word);
  }
};

// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    console.log(x, y);
  }
}

// Narrowing with in operator

const pet = { name: "Kitty", age: 20 };

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRunTime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

// Instance Narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    const d = new Date(date).toUTCString();
    console.log(d);
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    console.log(entity);
  } else {
    console.log(entity);
  }
}

// Type Predicates

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    console.log(animal);
    return "Meow";
  } else {
    return "Woof";
  }
}

// Discriminated Unions

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

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink";
    case "cow":
      return "Moo";
    case "rooster":
      console.log(animal);
      return "hoo";
    case "sheep":
      console.log(animal);
      return "beeeee";
    default:
      // We should never make it here if we handled it correctly
      const shouldNeverGetHere: never = animal;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));

// Exhaustive Check with Never
