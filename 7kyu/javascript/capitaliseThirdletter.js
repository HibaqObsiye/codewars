

// Write a function that takes a string and returns a new string with every third letter in uppercase.

function everyThirdLetter(string){
    let splitSentence = string.split("")
    let result = ""
  
    for(let i = 0 ;i < splitSentence.length; i++){
      if((i) % 3 == 0){
        result += splitSentence[i].toUpperCase()
      }
      else{
        result += splitSentence[i]
      }
    }
    return result
}