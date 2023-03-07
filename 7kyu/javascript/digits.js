function squareDigits(num){
    let numbers = num.toString().split("").map(x => Number(x))
    
    let array = []
    
   for(n of numbers){
     array.push(n * n)
   }
    return Number(array.join(""))
}