import { type Person, type Color } from "./types";

export default class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} is logout!`);
  }
}

export function userHelper() {
  console.log("HELPER ");
}
