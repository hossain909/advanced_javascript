// 1. if you declare a variable but not initialized a value then it return undefined;
// let numbers;
// console.log(numbers)
// 2. if you dont return anything in a function then you get  undefined
// function add(x,y){
//   console.log(x + y);
// }
// const result = add(5,10);
// console.log(result)

// function minus(x, y){
//   return
// }
// console.log(minus(5,10))
// 3. if you didn't return anything in function and store the function in a variable and the call it then it return undefined
// function minus(x, y){
//   console.log(x + y);
//   return
// }
// let result = minus(5,10)
// console.log(result)

// 4. if you not pass a parameter by default output is undefined
// function minus(x, y){
//     console.log(x);
//   }
//   let result = minus(5)
//   console.log(result)

// 5. if you wanna access any property tha doesn't exist in an object or array then it return undefined;
// const hossain = {name: "Taieb Hossain", age: 25};
// console.log(hossain.gf);

// =========== Null ============ //
let nums = [10, 20, 30, 40];
nums = [];
console.log(typeof nums);
