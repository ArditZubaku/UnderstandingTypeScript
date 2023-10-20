class Department {
  // public is the default
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  // Ensures that only a type like this class can call this method
  // Gotta be called 'this', and it is not considered a parameter
  describe(this: this) {
    // 'this' represents whoever calls the method
    console.log("Department" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const department = new Department("Test");
console.log(department);

department.addEmployee("E1");
department.addEmployee("E2");
// department.employees[3] = "TestEmployee";

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
