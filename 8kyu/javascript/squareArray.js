// Complete the square sum function so that it squares each number passed into it and then sums the results together.
function summation(number){
    let sum = 0
    for(j = 0; j < number.length; j++){
      sum += number[j]
      
    }
    return sum
  }
  
  function squareSum(numbers){
    let numbersToSum = []
    for(i = 0; i < numbers.length; i++){
      let number = numbers[i] ** 2
      numbersToSum.push(number)
    }
    return summation(numbersToSum)
  }