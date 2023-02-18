let input =  str.split("")
let vowel = ['a', 'e', 'i', 'o', 'u']

let check = []

for(let i = 0; i <= input.length; i++){
  if(vowel.includes(input[i])){
    check.push(input[i])
  }
}

let sum = 0

for(let j = 0; j < check.length; j++){
  sum += 1
}
return sum