const x = 100; // Global scope
function add(){
  const a = 10; // local scope or block scope
  if(true){
    console.log(a);
  }

}
add();
console.log(x)