//Write a function that takes a string and returns the number of vowels in the string.

// Write a function that takes a string and returns the number of vowels in the string.

function returnVowels(string){
    let splitSentence = string.toLowerCase().split("")
   
    let vowels = ["a","e","i","o","u"]
    let vowelCount = ""
    for(let i = 0; i < splitSentence.length; i++){
      if(vowels.includes(splitSentence[i])){
        vowelCount += splitSentence[i]
      }
    }
    return vowelCount.length
}
  console.log(returnVowels("aeiou"))