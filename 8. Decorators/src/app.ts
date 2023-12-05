// A decorator in the end is just a function
// A decorator is invoked when the executing code reaches it, not when a class instantiated

// When used like this, it should be called not invoked
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// When used like this, it should be called with arguments
function Logger(logString: string) {
  console.log(
    "Logger Factory runs before any decorator function, 1 by 1, up -> down"
  );

  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookID: string) {
  // The factory runs before the decorator
  console.log("Template Factory");

  // The actual decorator
  return function (constructor: any) {
    console.log("Rendering template " + template);

    const hookElement = document.getElementById(hookID);

    const person: Person = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;
      hookElement.querySelector("h1")!.textContent = person.name;
    }
  };
}

function RunsLast(_: Function) {
  console.log("Decorators run bottom -> up, so this runs last.");
}

@RunsLast
@WithTemplate("<h1>My person OBJ</h1>", "app")
@Logger("LOGGING - PERSON")
class Person {
  name = "John";

  constructor() {
    console.log("Creating a person object...");
  }
}

const person = new Person();
console.log(person);

// ----------------------------------------------------------------

function OnPropertyDecorator(prototype: any, propertyName: string | Symbol) {
  // If it is a static property instead of prototype we get the constructor function
  console.log("Property decorator");
  console.log(prototype, propertyName);
}

// Accessor decorator
function OnAccessorDecorator(
  target: any | Function,
  accessorName: string,
  descriptor: PropertyDescriptor
) {
  console.log(
    `Accessors. TypeScript supports getters/setters as a way of intercepting accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object. Let's convert a simple class to use get and set .`
  );

  console.log("Accessor decorator");
  console.log(target, accessorName, descriptor);
}

function OnMethodDecorator(
  target: any | Function,
  methodName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator");
  console.log(
    "The accessor decorator could be used for methods too, since it is basically the same"
  );

  console.log(target, methodName, descriptor);
}

function OnParameterDecorator(
  target: any | Function,
  methodName: string | Symbol,
  position: number
) {
  console.log("Parameter decorator");
  console.log(target, methodName, position);
}

class Product {
  // It executes whenever JS registers this, like whenever it reaches this line when it scans the code.
  @OnPropertyDecorator
  private _price: number;
  constructor(private title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @OnAccessorDecorator
  set price(value: number) {
    if (value > 0) this._price = value;
    else throw new Error("Invalid price, should be positive");
  }

  get price() {
    return this._price;
  }

  @OnMethodDecorator
  getPriceWithTax(
    @OnParameterDecorator
    tax: number
  ) {
    return this.price * (1 + tax);
  }
}

const product = new Product("Title", 10);
const product2 = new Product("Title2", 10);

console.log(
  "No matter how many objects I instantiate, the decorators will be executed only once, at definition"
);
