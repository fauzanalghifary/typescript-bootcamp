function square(num: number): number {
  // Return type is implicit
  return num * num;
}

function greet(person: string = "Stranger"): string {
  return `Hi, ${person}`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  } else {
    return num;
  }
}

const add = (x: number, y: number): number => {
  return x + y;
};

const colors = ["red", "blue", "yellow"];

colors.map((color) => {
  return color.toUpperCase();
});

// VOID
function printTwice(msg: string): void {
  console.log(msg);
}

// NEVER
function makeError(msg: string) {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game Loop");
  }
}

// EXERCISE

function twoFer(person: string = "you"): string {
  return `One for ${person}, one for me`;
}

const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
