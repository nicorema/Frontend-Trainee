class Player {
  constructor(first, last) {
    console.log("Constructor");
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("Booyah");
  }
}

const player1 = new Player();
const player2 = new Player();

player1.taunt();
player2.taunt();
