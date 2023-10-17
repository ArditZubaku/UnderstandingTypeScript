let userInput: unknown;
let userName: string;

// Works
userInput = 5;
userInput = "Test";

// Doesn't work
// userName = userInput;

// To make it work, add extra check:
if (typeof userInput === "string") userName = userInput;

function generateError(message: string, code: number): never {
  throw { message, code };
  // while (true) {}
}

// Since it never returns anything, the output will be nothing.
const result = generateError("Never returns anything", 500);
console.log(result);
