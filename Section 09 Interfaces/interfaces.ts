interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 11234 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
  sayHi2?(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  id: 1234,
  sayHi: () => {
    return "Hello!";
  },
};

// =====================================

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// ===================================== REOPEN INTERFACES

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Shepherd",
  bark() {
    return "WOOF";
  },
};

// ===================================== EXTENDING INTERFACES

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 21,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "guide dog",
};

interface Person2 {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person2, Employee {
  level: string;
  languanges: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 12385,
  email: "pierre@email.com",
  level: "senior",
  languanges: ["python", "js"],
};
