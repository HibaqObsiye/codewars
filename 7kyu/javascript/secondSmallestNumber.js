// Given an array of integers, write a function that returns the second smallest integer in the array.

function secondSmallestInteger(array){

    let smallest = Infinity;
    let secondSmallest = Infinity
  
    array.forEach(function(number){
      if(number < smallest && number != smallest){
        secondSmallest = smallest
        smallest = number
      }
      else if(number < secondSmallest && number != smallest){
        secondSmallest = number
      }
    })
    return secondSmallest
  }
  console.log(secondSmallestInteger([1,1,2,3,2,4,5]))