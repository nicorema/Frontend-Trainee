import { type Person } from "./types.js";

class User implements Person {
  constructor(public username: string, public email: string) {}
  logout() {
    console.log(`${this.username} logs out`);
  }
}

export default User;
