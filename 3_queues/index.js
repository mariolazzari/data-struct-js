import { Queue } from "./Queue.js";

let tiffsQueue = new Queue();
console.log(tiffsQueue);

tiffsQueue.enqueue(20);
tiffsQueue.enqueue(21);
tiffsQueue.enqueue(2200);
console.log(tiffsQueue);

tiffsQueue.dequeue();
console.log(tiffsQueue);
