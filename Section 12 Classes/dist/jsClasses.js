class Player {
  static description = "Player In Our Game";
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split("");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Wrror("Score must be positive!");
    }
    this.#score = newScore;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  taunt() {
    console.log("BOOYAH");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(powers, first, last) {
    super(first, last);
    this.powers = powers;
  }

  isAdmin = true;
}

const admin = new AdminPlayer(["delete"], "admin", "mcAdmin");

console.log(admin);

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1);
player1.loseLife();
console.log(player1);
console.log(player1.score);
console.log(player1.fullName);
player1.score = 10;
