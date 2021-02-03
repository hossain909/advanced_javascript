// const numbers = [,20,30,40,50,100];
// const part = numbers.slice(5);
// // console.log(part)

// const newPart = numbers.splice(0,5, "hossain");
// console.log(newPart)
// console.log(numbers)
// const join = newPart.join("")

// console.log(join)
const myName = "hossain";
const newName = []
for(let i = 0; i < myName.length; i++){
  const letter = myName[i];
  let elem = letter.slice();
  newName.push(letter);

}
// console.log(newName.reverse().toString().replace(/,/g," "));
//console.log(newName.reverse().join(""))