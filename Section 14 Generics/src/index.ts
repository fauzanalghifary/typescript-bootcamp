// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [];

let inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputEl);
inputEl.value = "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

function identity<T>(item: T): T {
  return item;
}

identity<number>(7);
identity<string>("7");

function getRandomElement<T>(list: T[]): T {
  const randIndx = Math.floor(Math.random() * list.length);
  return list[randIndx];
}

console.log(getRandomElement<string>(["A", "B", "C", "D"]));
console.log(getRandomElement([1, 2, 3, 4]));

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
// console.log(merge({ name: "colt" }, 1)); ERROR

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

function makeEmptyList<T = number>(): T[] {
  return [];
}

const string = makeEmptyList();

// ===============================

interface Song {
  title: string;
  artis: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];

  add(el: T) {
    this.queue.push(el);
  }
}

const song = new Playlist<Song>();
const video = new Playlist<Video>();
