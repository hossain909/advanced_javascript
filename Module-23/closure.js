function numbers(){
  let num = 10;
  return function(){
     num++;
     return num
  
  }
}

const num1 = numbers();
console.log(num1())
console.log(num1())
console.log(num1())

const num2 = numbers();
console.log(num2())
console.log(num2())
console.log(num1())
console.log(num2())

