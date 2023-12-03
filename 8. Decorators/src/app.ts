// A decorator in the end is just a function

// When used like this, it should be called not invoked
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// When used like this, it should be called with arguments
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "John";

  constructor() {
    console.log("Creating a person object...");
  }
}

const person = new Person();
console.log(person);
