// Given an array of objects. Add a bonus to each person. Bonus is 10 % of the person's salary

function employees(persons){
    let newArray = persons.map(obj => {
     return {
       ...obj,
       bonus: obj.salary * 0.1    
     };
   })
     return newArray
}
   //spread operator creates a new object with all the information of the original object plus the new key which is bonus
   console.log(employees([
     { name: 'Alice', salary: 50000 },
     { name: 'Bob', salary: 60000 },
     { name: 'Charlie', salary: 70000 }
   ]))