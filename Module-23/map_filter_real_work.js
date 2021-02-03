const students = [
  {name: "Hossain", id: 64, dept: "History"},
  {name: "Wahid", id: 22, dept: "Social Science"},
  {name: "Rana", id: 22, dept: "Islamic History"},
  {name: "Imran", id: 31, dept: "Bangla"}
]

// const names = [];
// for(let i = 0; i < students.length; i++){
//   const elem = students[i];
//   names.push(elem.name);
  
// }

const names2 = students.map(e => e.name);
const id = students.filter(e => e.id > 50);
const dept = students.filter(e => e.dept == "Bangla");
const dept2 = students.find(e => e.dept == "Islamic History");

// console.log(names);
console.log(names2);
console.log(id)
console.log(dept)
console.log(dept2)