function sumOfSquares(array){

    let i = 0
    let sum = 0
    while(i < array.length){
     sum += array[i] ** 2
      i++
    }
    return sum
  }
  
  let array1 = [1,2,3]
  
  console.log(sumOfSquares(array1))