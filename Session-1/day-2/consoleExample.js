const data = "this is a dummy data used for this tutorial";

console.log(data);
console.error(data);
// console.clear() // clears the console and cleans it 
console.time("loop timer");
for (let i = 0; i < 1000; i++) {
    console.log(i); // Logs numbers from 0 to 4
    if (i>5){
        break;
    }
}
console.timeEnd("loop timer");
// console.timeStamp();

// Common methods: console.log(), console.error(), console.warn(), console.time(), console.timeEnd(), console.trace()