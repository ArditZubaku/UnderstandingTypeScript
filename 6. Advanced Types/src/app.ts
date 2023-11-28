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
