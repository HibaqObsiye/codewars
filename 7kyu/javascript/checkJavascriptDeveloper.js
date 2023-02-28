// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

function countDevelopers(str){
    let vowelCount = 0
  
    for(let i = 0; i < str.length; i++){
       
      if(str[i].continent === "Europe" && str[i].language ===     
      "JavaScript"){
          vowelCount++
    
      }
      if(vowelCount === 0){
        return 0
      }
      return vowelCount
    }
}