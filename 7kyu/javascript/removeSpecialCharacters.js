//remove white spaces before and after strings in an array and remove special characters.

function check(strings){
    let trimmedverse = []
    let removedSpecial = []
    
    for(let i = 0; i < strings.length; i++){
    let trimm = strings[i].trim().toLowerCase()
    removedSpecial.push(trimm.replace(/\//g, ""))
    }
    return removedSpecial
  
}