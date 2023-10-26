interface Person {
  // You can not initialize an interface field since they all are abstract by default
  name: string;
  age: number;

  // See, you can only declare the method structure, you can not implement it
  greet(phrase: string): void;
}

// An interface can be used to declare object types
let obj: Person;
obj = {
  age: 5,
  name: "Test",
  //   greet() {
  //     console.log(this.name);
  //   },
  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  },
};

obj.greet("Hi there");

interface Greetable {
  // You can not use public/private modifiers inside an interface
  // With readonly you can only set a value once
  readonly name: string;
  greet(phrase: string): void;
}

class Human implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}
const person: Greetable = new Human("Test person");
// person.name = 'Test';
person.greet("Hello");
