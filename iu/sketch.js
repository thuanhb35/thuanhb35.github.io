let foods = ["apple", "banana", "cantaloupe", "dragon fruit", "elderberry", "farkleberry"];
let result = [];

for(let i = 0; i < foods.length; i++){
  if(i%2===0){
    result.unshift(foods[i]);
  }
  else{
    result.push(foods[i]);
  }
}