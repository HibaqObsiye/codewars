//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

function orderFood(list) {
    const counts = {}
    
    for(let i = 0; i < list.length; i++){
      const meal = list[i].meal
      if(counts[meal]){
        counts[meal]++
      }
      else{
        counts[meal] = 1
      }
    }
      return counts
}