 // Given an array of book objects, where each object contains the properties title, author, and price, write a function that extracts the price property from each object and returns a new array containing the prices. Use the map() method to solve the problem.

 function library(books){
    return books.map(book => book["price"])
    
  }
  console.log(library([
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 7.99 },
    { title: '1984', author: 'George Orwell', price: 12.99 }
  ]))