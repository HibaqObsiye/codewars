function highAndLow(numbers){
    let array = []
    let x = numbers.split(" ").map(Number)
    let sorted = x.sort(function(a, b){return a - b})
    let max = Math.max(...x)
    let min = Math.min(...x)
    array.push(max, min)
    return array.join(" ")
}