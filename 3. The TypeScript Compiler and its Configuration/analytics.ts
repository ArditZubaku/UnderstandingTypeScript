console.log(
  "Run tsc --init to create tsconfig.json to compile the whole project at once"
);

console.log("You can now run tsc --watch");

const map = new Map();

// testing();
// test3();

const test3 = function testing() {
  console.log("Test");
};

test3();

// testing2();

const testing2 = () => {
  console.log("Test 2");
};

testing2();
