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
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    // Will replace the class constructor
    // Syntactic sugar for creating a new class that extends the class that we pass as constructor
    // Now the decorator will run only when we instantiate the class
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template " + template);

        const hookElement = document.getElementById(hookID);

        if (hookElement) {
          hookElement.innerHTML = template;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

// Now the decorator will run only when we instantiate the class
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
  console.log(
    "TypeScript will ignore the return value of a parameter decorator"
  );
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
  "No matter how many times I instantiate the class, the decorators will be executed only once, at definition"
);

function AutoBind(
  _: any,
  __: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };

  return adjustedDescriptor;
}

class Printer {
  message = "This works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const button = document.querySelector("button")!;

const p = new Printer();

button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProperty: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function RequiredProperty(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["required"],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: ["positive"],
  };
}

function validate(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  if (!objValidatorConfig) {
    return true;
  }

  let isValid: boolean = true;

  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}
class Course {
  @RequiredProperty
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleElement = document.getElementById("title") as HTMLInputElement;
  const priceElement = document.getElementById("price") as HTMLInputElement;

  const title = titleElement.value;
  const price = +priceElement.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again");
    return;
  }

  console.log({ createdCourse });
});
