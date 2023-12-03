// A decorator in the end is just a function

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "John";

  constructor() {
    console.log("Creating a person object...");
  }
}

const person = new Person();
console.log(person);
