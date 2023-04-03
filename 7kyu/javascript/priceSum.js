// Write a function that takes an array of objects, where each object has a "price" property, and returns the total price of all the objects.

function shoppingItems(array){
    let i = 0
    let sum = 0
    while(i < array.length){
      sum += array[i].price
      i++
    }
    return sum
  }
  
  let array1 = [
    {
      name: "pizza",
      price: 22
    },
    {
      name: "cauliflower",
      price: 11
    }
    
  ]
  
  
  console.log(shoppingItems(array1))
  