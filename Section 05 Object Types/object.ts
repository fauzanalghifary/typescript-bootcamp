function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Frank" });

// YANG INI ERROR, GAK BOLEH ADA AGE.
// printName({ first: "Mick", last: "Jagger", age: 473 });

let singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer);

// ==============================================

type Point = {
  x: number;
  y: number;
};

let coordinate: Point = {
  x: 34,
  y: 2,
};

function randomCoordinate(): Point {
  return {
    x: Math.random(),
    y: Math.random(),
  };
}

function doublePoint(point: Point): Point {
  return {
    x: point.x * 2,
    y: point.y * 2,
  };
}

// ==============================================

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}
const mySong: Song = {
  title: "Unchained Melody",
  artist: "Colt Steele",
  numStreams: 124632,
  credits: {
    producer: "Blue",
    writer: "Max",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);

// ==============================================

type Point2 = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point2 = { x: 2, y: 2 };

// ==============================================

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 1287,
  username: "pojan",
};

console.log(user.id);
// user.id = 9; ERROR DONG

// ============================================== INTERSECTION

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
