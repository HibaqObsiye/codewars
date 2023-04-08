//You will be given a sequence of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

function allContinents(list){
    let continents = ['Africa', 'Americas', 'Asia', 'Europe','Oceania']
  
    let check = list.map(item => item.continents)
  
    return continents.every(continent)
}