// A decorator in the end is just a function

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
