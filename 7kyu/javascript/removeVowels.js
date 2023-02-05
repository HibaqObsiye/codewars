function disemvowel(str) {
    let check = str.split("") 
    let vowels = ["a","e","i","o","u"]
      
    return check.filter(x => !vowels.includes(x.toLowerCase())).join("")
}