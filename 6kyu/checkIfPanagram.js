//Check if word given is a panagram

function isPangram(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
  
    for (let letter of alphabet){
      if(!string.toLowerCase().includes(letter)){
        return false;
      }
    }
    return true;
}