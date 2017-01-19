var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var counter = 0;
// Write a while loop that prints out the contents of ingredients:
while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter ++;
}


// // Write a for loop that prints out the contents of ingredients:
for (counter; counter < ingredients.length; counter++){
  console.log(ingredients[counter]);
}


// // Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length - 1; i >=0; i--){
  console.log(ingredients[i]);
}

