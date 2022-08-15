const activeUsers: string[] = ["colt"];
activeUsers.push("Pojan");
// activeUsers.push(2); ERROR

// =============================

const bools: Array<boolean> = [];

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 21, y: 8 });

// ============================= MULTIDIMENSIONAL ARRAY

const board: string[][] = [
  ["X", "O", "X"],
  ["O", "X", "O"],
];

// ============================= EXERCISE

const ages: number[] = [];

const gameBoard: string[][] = [];

type Product = {
  name: string;
  price: number;
};

function getTotal(products: Product[]): number {
  let total = 0;
  for (let product of products) {
    total += product.price;
  }
  return total;
  return products.reduce(
    (prevVal, { price }: { price: number }): number => prevVal + price,
    0
  );
}
