function descendingOrder(n){
    let splitNumber = String(n).split("")
    let x = splitNumber.map(x => Number(x)).sort()
    let y = x.reverse().join("")
    return Number(y)
}