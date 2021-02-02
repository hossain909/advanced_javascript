// ====== Map function ==== // 
// const numbers = [5,10,20,30,40,100];
// const sum = numbers.map(function(element){
//   return element + element;
// })
// console.log(sum)
const numbers = [5,10,20,30,40,100];
const sum = numbers.map(element => element * element);
console.log(sum)



// ====== Filter function ==== // 
const greaterThan20 = numbers.filter(function(element){
  return element > 20;
})
console.log(greaterThan20)

// ====== Find function ==== // 
const singleElement = numbers.find(e => e > 50);
console.log(singleElement)