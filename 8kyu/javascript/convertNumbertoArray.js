//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let numberSplit = String(n)
     let split = [...numberSplit]
     let newOne = split.reverse()
       
     return newOne.map(x => Number(x))
}