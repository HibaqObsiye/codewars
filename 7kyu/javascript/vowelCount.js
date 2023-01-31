function getCount(str) {
    let letters = str.split("")
  
    sum = 0
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    let array = []
    for(let i = 0; i < letters.length; i++){
      if(vowels.includes(letters[i])){
        sum += 1
      }
      
    }
  return sum
}