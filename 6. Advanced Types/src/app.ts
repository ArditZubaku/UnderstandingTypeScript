console.log("Ardit");

// Type & Type
// Interface & Interface
// Interface & Type
// Interface extends Interface
// Interface extends Type

type Admin = {
  name: string;
  privileges: string[];
};
interface IAdmin {
  name: string;
  privileges: string[];
}

class Test {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface ITest extends Test {
  test: string;
}

type Employee = {
  name: string;
  startDate: Date;
};

interface IEmployee {
  name: string;
  startDate: Date;
}

interface IElevatedEmployee extends IEmployee, IAdmin {}
interface IElevatedEmployee2 extends Admin {}

// type ElevatedEmployee = Admin & Employee;
// type ElevatedEmployee = IAdmin & Employee;
type ElevatedEmployee = IAdmin & IEmployee;

const employee1: ElevatedEmployee = {
  name: "Employee 1",
  startDate: new Date(),
  privileges: ["admin"],
};

console.log(employee1);

const employee2: IElevatedEmployee = {
  name: "Employee 2",
  startDate: new Date(),
  privileges: ["non-admin"],
};

const employee3: IElevatedEmployee2 = {
  name: "",
  privileges: [],
};

type Combinable = string | number;
type Numeric = number | boolean;

// Universal is of type number since that is the only intersection between the two types, if there were more, they would be added to the type
type Universal = Combinable & Numeric;
// Combines all types
type Universal2 = Combinable | Numeric;

const universal: Universal = 123;
// const universal2: Universal = '123';
const universal2: Universal2 = "123";
const universal3: Universal2 = true;

console.log(
  "------------------------------------------------------------------------------"
);

function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(employee: UnknownEmployee) {
  console.log("Name: " + employee.name);
  // Check if the privileges property exists in the employee type
  if ("privileges" in employee) {
    console.log("Privileges: " + employee.privileges);
  }
  //   if (employee.hasOwnProperty("startDate")) {
  //     console.log("Start date:" + employee.startDate);
  //   }
  if ("startDate" in employee) {
    console.log("Start date:" + employee.startDate);
  }
}

class Car {
  public drive() {
    console.log("Driving");
  }
}

class Truck {
  public drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Truck();
const vehicle2 = new Car();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if('loadCargo' in vehicle)
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

interface Bird {
  // Literal type
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      animal.flyingSpeed = 10;
      break;
    case "horse":
      animal.runningSpeed = 10;
      break;
    default:
      break;
  }
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({
  type: "horse",
  runningSpeed: 10,
});

// Type casting
const userInputElement1 = <HTMLInputElement>(
  document.getElementById("user-input")
);

// ! - tells TS that it will never be null
// const userInputElement2 = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

const userInputElement2 = document.getElementById("user-input");

// userInputElement2.value = "Hi there";

if (userInputElement2) {
  (userInputElement2 as HTMLInputElement).value = "Hi there";
}

interface ErrorContainer {
  // { email: 'Not a valid email address', username: 'Must start with a character'}
  // number | symbol | string
  [property: string]: string;
  id: string;
  // Cant do this bc of the index type, we can now add as much properties as we want as long as they satisfy the index type constraint
  // id2: number;
}

const errorBag: ErrorContainer = {
  id: "1",
  email: "Not a valid email address",
  anotherProperty: "Another property",
  // Can be interpreted as a string
  1: "Is allowed",
};
