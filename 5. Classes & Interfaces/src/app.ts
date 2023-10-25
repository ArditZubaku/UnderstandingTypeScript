class Department {
  // public is the default
  //   private id: number;
  //   public readonly name: string;
  // private employees: string[] = [];
  // Protected -> available in the child classes
  protected employees: string[] = [];

  // readonly -> shouldn't change after initialization
  constructor(public readonly name: string, private id: number) {
    // this.name = name;
  }

  // Ensures that only a type like this class can call this method
  // Gotta be called 'this', and it is not considered a parameter
  describe(this: this) {
    // 'this' represents whoever calls the method
    console.log("Department with ID: " + this.id + ", name: " + this.name);
  }

  addEmployee(employee: string) {
    // this.name = 'Test'
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
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

const department = new Department("Test", 1);
console.log(department);

// const test: ITDepartment = new Department("TEST", 2);
// const departmentIT: Department = new ITDepartment(1, ["Test"]);
const departmentIT: ITDepartment = new ITDepartment(1, ["Test"]);

department.addEmployee("E1");
department.addEmployee("E2");
// department.employees[3] = "TestEmployee";

departmentIT.addEmployee("Max");
departmentIT.addEmployee("NotMax");
departmentIT.printEmployeesInformation();

departmentIT.mostRecentReport = "Test";
console.log(departmentIT.mostReports);

department.describe();
department.printEmployeesInformation();

// const departmentCopy = {
//   describe: department.describe,
// };
const departmentCopy = {
  name: "test",
  describe: department.describe,
};

// Undefined -> bc it doesnt have the same properties
// departmentCopy.describe();
