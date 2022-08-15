let age: number | string = 21;
age = 23;
age = "24";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 24 };
coordinates = { lat: 321.231, long: 23.334 };

// ===================================== NARROWING W/ UNION TYPES

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}
printAge(23);

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
}

// ===================================== UNION TYPES AND ARRAY

// const stuff: any[] = [1, 2, 3, 4, true, "asdas"];

const stuff: (number | string)[] = [1, 2, "3"];
const coords: (Point | Loc)[] = [];

// ===================================== LITERAL TYPES

let zero: 0 = 0;
// zero = 2; ERROR

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "Angry"; ERROR

// ===================================== EXERCISE

let highScore: number | boolean;
highScore = 1;
highScore = false;

const stuff2: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudents = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [];

const greet = (person: string | string[]): void => {
  if (typeof person === "string") {
    console.log(`Hello, ${person}`);
  } else {
    for (let p of person) {
      console.log(`Hello, ${p}`);
    }
  }
};
