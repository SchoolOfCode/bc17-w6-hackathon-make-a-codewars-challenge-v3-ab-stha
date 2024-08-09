import { wholeProgram } from "./program.js";

// Main function that runs when main.js is ran
async function main () {
    let continueLoop = true
    while (continueLoop) {
      continueLoop = await wholeProgram();
    }
  };
  
  main();