class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const department = new Department('Test');
console.log(department);

