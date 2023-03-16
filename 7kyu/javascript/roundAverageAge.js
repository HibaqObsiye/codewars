//write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

function getAverageAge(list) {
    const ages = []
   list.forEach(x => {ages.push(x.age)})
     
     let sum = 0
 
     for(item of ages){
       sum += item
     }
     let roundedUp = sum / ages.length
     return Math.round(roundedUp)
}