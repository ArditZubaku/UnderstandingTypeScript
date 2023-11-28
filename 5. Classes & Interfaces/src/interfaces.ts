interface Person {
  // You can not initialize an interface field since they all are abstract by default
  readonly name?: string;
  age: number;

  // See, you can only declare the method structure, you can not implement it
  greet(phrase: string): void;
}

interface Person {
  readonly canRedeclareTheSameInterface: string;
}

type test = {
  readonly name: string;
};

class test2 implements test, Person {
  canRedeclareTheSameInterface: string = "5";
  age: number = 5;
  greet(phrase: string): void {
    console.log(phrase);
  }
  name: string = "5";
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
  canRedeclareTheSameInterface: "5",
};

obj.greet("Hi there");

interface Named {
  readonly name?: string;
}

// An interface can extend how many interfaces that you want
interface Greetable extends Named, Person {
  // You can not use public/private modifiers inside an interface
  // With readonly you can only set a value once
  greet(phrase: string): void;
  outputName?: string;
  outputMethod?(): string;
}

class Human implements Greetable {
  name?: string;
  age: number = 21;

  constructor(name?: string) {
    if (name) this.name = name;
  }

  canRedeclareTheSameInterface: string = "5";

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

// const person: Greetable = new Human("Test person");
const person: Human = new Human("Test person");
person.canRedeclareTheSameInterface = "6";
console.log(person);

// const test3: Greetable = new Human("Test test");
// test3.outputMethod();

// person.outputName = "5";
// person.name = 'Test';
person.greet("Hello");

type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (a: number, b: number) => a + b;

interface AddFunc {
  (a: number, b: number): number;
}

// const addFunc: AddFunc = (a: string, b: number) => a + b;
const addFunc: AddFunc = (a: number, b: number) => a + b;
