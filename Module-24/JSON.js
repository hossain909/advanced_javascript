const students = {
  name: "Taieb",
  id: 101,
  dept: "History",
  age: 24
}
const sendBackend = JSON.stringify(students);
console.log(sendBackend);
const displayWebsite = JSON.parse(sendBackend);
console.log(displayWebsite);