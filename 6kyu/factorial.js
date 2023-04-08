//find the factorial


function factorial(input) {
    let factorial = 1
    let i = input
    while(i >= 1){
      factorial *= i
      i--
    }
    return factorial
}