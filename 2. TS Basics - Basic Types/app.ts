let userInput: unknown;
let userName: string;

// Works
userInput = 5;
userInput = "Test";

// Doesn't work
// userName = userInput;

// To make it work, add extra check:
if (typeof userInput === "string") userName = userInput;
