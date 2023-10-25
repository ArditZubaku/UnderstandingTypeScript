// If you have 1 or more abstract methods => you should declare the class as abstract
abstract class Department {
  // public is the default
  //   private id: number;
  //   public readonly name: string;
  // private employees: string[] = [];
  // Protected -> available in the child classes
  protected employees: string[] = [];
  static currentYear: number = 2023;

  // readonly -> shouldn't change after initialization
  // you can not declare the constructor as static
  /* static */ constructor(public readonly name: string, private id: number) {
    // this.name = name;
    // This works -> Static => belongs to the class, not the instance
    Department.currentYear = 0;
    // This doesn't work -> "this" => References the instance
    // this.currentYear = 1;
  }

  static createEmployee(name: string) {
    return { name };
  }

  // Ensures that only a type like this class can call this method
  // Gotta be called 'this', and it is not considered a parameter
  // describe(this: this) {
  //   // 'this' represents whoever calls the method
  //   console.log("Department with ID: " + this.id + ", name: " + this.name);
  // }

  // Abstract methods have no body and are declared only in abstract classes
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.name = 'Test'
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Abstract classes that extend an abstract class are not enforced to implement abstract methods
abstract class Test extends Department {
  abstract test(): void;

  // Can not initialize an abstract property
  // abstract property: string = 'Test';
  abstract property: string;

  normalMethod(): void {
    console.log("Normal method");
  }
}

// When you extend an abstract class that extends another abstract class, you are enforced to implement the abstract methods of both classes
class NormalClass extends Test {
  property: string = "Initialized in child class";

  test(): void {
    console.log("From Test class");
  }

  describe(this: Department): void {
    console.log("From Department class");
  }
}

class AccountingDepartment extends Department {
  describe(this: Department): void {
    console.log(this);
  }

  // In a static context, "this" -> will refer to the class, not the instance
  private static instance: AccountingDepartment;

  private constructor(name: string, id: number) {
    super(name, id);
  }

  // Singleton pattern
  static getInstance() {
    // if (this.instance)
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("Accounting", 1);
    return this.instance;
  }
}

class ITDepartment extends Department {
  public admins: string[];
  private lastReport: string;
  constructor(id: number, admins: string[]) {
    super("IT", id); // 'super' gotta be the first thing to be called
    this.admins = admins;
    this.lastReport = admins[0];
  }

  // When you inherit an abstract class, you are enforced to implement the abstract methods
  describe(): void {
    console.log("Describe method");
  }

  // Overriding methods
  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }

    this.employees.push(employee);
    this.lastReport = employee;
  }

  // This is considered a property, you access it as a property
  get mostReports(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports available");
  }

  // This is considered a property, you access it as a property
  set mostRecentReport(report: string) {
    if (!report) throw new Error("Please pass in a valid value!");
    this.lastReport = report;
  }
}

// You can not instantiate an abstract class
// const department = new Department("Test", 1);
console.log(Department.currentYear);

const e1 = Department.createEmployee("Test");
console.log(e1);

const accounting: AccountingDepartment = AccountingDepartment.getInstance();
const accounting2: Department = AccountingDepartment.getInstance();
// The same object is returned
console.log(accounting, accounting2);

// const test: ITDepartment = new Department("TEST", 2);
// const departmentIT: Department = new ITDepartment(1, ["Test"]);
const departmentIT: ITDepartment = new ITDepartment(1, ["Test"]);

// department.addEmployee("E1");
// department.addEmployee("E2");
// department.employees[3] = "TestEmployee";

departmentIT.addEmployee("Max");
departmentIT.addEmployee("NotMax");
departmentIT.printEmployeesInformation();

departmentIT.mostRecentReport = "Test";
console.log(departmentIT.mostReports);

// department.describe();
// department.printEmployeesInformation();

// const departmentCopy = {
//   describe: department.describe,
// };
// const departmentCopy = {
//   name: "test",
//   describe: department.describe,
// };

// Undefined -> bc it doesnt have the same properties
// departmentCopy.describe();
