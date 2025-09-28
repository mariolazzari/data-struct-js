import { Stack } from "./Stack";

// creating object for stack class
let stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
