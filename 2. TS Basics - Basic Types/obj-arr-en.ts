// const person: {
//   name: string;
//   age: number;
// } = {
/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  // Tuple type -> special type of array specified to have only 2 elements, where 1st element should be of type number, 2nd of type string
  role: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
}; */

// const ADMIN = 0;
// const STUDENT = 1;
// const TEACHER = 2;

enum Role {
  // By default they are assigned a value of number starting from 0
  ADMIN, //same as ADMIN = 0
  STUDENT, // STUDENT = 1
  TEACHER, // TEACHER = 2
}

enum Role2 {
  // If we assign the first value, then it will increment from there
  ADMIN = 10,
  STUDENT, // same as STUDENT = 11
  TEACHER, // same as TEACHER = 12
}

enum Role3 {
  // We can assign different values to each one
  ADMIN = 101,
  STUDENT = "Student",
  TEACHER = 202,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// Pushing works tho, even tho it should'nt!!!
// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
