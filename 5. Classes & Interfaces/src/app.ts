class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Ensures that only a type like this class can call this method
  // Gotta be called 'this', and it is not considered a parameter
  describe(this: Department) {
    // 'this' represents whoever calls the method
    console.log("Department" + this.name);
  }
}

const department = new Department("Test");
console.log(department);

// const departmentCopy = {
//   describe: department.describe,
// };
const departmentCopy = {
  name: "test",
  describe: department.describe,
};

// Undefined -> bc it has no name property
departmentCopy.describe();
