// Write a function that takes an array of integers and returns the sum of all even numbers 

function returnOdd(arr){
    const totalOdd = arr.reduce((accumulator, currentValue) =>{
      if(currentValue % 2 != 0){
        accumulator += currentValue
      }
      return accumulator
    })
    return totalOdd
}