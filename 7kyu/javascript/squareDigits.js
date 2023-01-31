function squareDigits(num){
    let array = (String(num).split("")).map(x => Number(x))
  
   let newNum = array.map(x => x * x).join("")
   
   return Number(newNum)
}