// Given an array of integers, write a function that returns the second smallest integer in the array.
function sentence(writer, lastname, age){
    return `Writer ${writer} ${lastname} died at ${age} years old.`
  }
  
  function logAllWriters(list) {
  
   list.forEach(function(item){
   console.log(sentence(item.firstName, item.lastName, item.age)
    )})
  }
  
  let writers = [
    {
      firstName: "Virginia",
      lastName: "Woolf",
      occupation: "writer",
      age: 59,
      alive: false,
    },
    {
      firstName: "Zadie",
      lastName: "Smith",
      occupation: "writer",
      age: 40,
      alive: true,
    },
    {
      firstName: "Jane",
      lastName: "Austen",
      occupation: "writer",
      age: 41,
      alive: false,
    },
    {
      firstName: "Bell",
      lastName: "Hooks",
      occupation: "writer",
      age: 63,
      alive: true,
    },
    {
      firstName: "Yukiko",
      lastName: "Motoya",
      occupation: "writer",
      age: 49,
      alive: true,
    },
  ];
  
  console.log(logAllWriters(writers))