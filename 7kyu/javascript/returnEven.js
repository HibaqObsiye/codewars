// Write a function that takes an array of integers and returns the sum of all even numbers 

function returnEven(arr){
  
    let newValue = arr.reduce((accumulator, currentValue) =>{
       if(currentValue % 2 === 0){
           accumulator += currentValue
       }
      return accumulator
    }, 0)
     return newValue
}