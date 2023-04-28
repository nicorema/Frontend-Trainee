import ShelterDog from "./ShelterDog";
import Dog from "./Dog";
import { add, divide, multiply } from "./utils";

const elton = new Dog("Elton", "Aussie", 1);
elton.bark();

console.log(add(4, 5));
console.log(divide(4, 5));
console.log(multiply(4, 5));

const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Shelterito");
