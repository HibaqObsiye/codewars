function XO(str) {
    let string = str.toLowerCase().split("")
    let xArray = [
    ]
    let yArray = []
  for(let i = 0; i <= string.length; i++){
    if(string[i] === 'x'){
      xArray.push(string[i])
    }
    else if(string[i] === 'o'){
      yArray.push(string[i])
    }
  }
  return yArray.length === xArray.length
}