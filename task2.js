let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter(bListing); 
function bListing(animal) {
  return animal.startsWith('b')
}
console.log(bListing);
console.log(animal);
//You have an array of lovely animals. However, you can only keep the animals that start with the letter `b`. 

//👉 2a. In the new variable `bListAnimals`, use the `.filter()` method to generate a new array which contains only the animals whose name begins with 'b'. 


