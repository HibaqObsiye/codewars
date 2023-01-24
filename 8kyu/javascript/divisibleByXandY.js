//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    let divisibleByY = n % y === 0
    let divisibleByX = n % x === 0
    if(divisibleByY && divisibleByX ){
      return true
    }
    else{
     return false
    }
}