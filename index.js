function add(a,b){
  return a+b;
}
function sum(numbers){
  let result = 0;
  for (const number of numbers){
    result += number;
  }
  return result;
}
function hi(){
  console.log("Hi, Everyone !!!");
}

module.exports = {add, sum, hi};