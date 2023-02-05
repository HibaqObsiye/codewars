function getMiddle(s)
{
  let odd = []
  let check = s.split("")
  let formula = Math.floor((check.length + 1) / 2)
  console.log(formula)
  
  if(check.length % 2 === 0){

    odd.push(check[formula -1])
    odd.push(check[formula])

    return odd.join("")
  }

  else{
    return check[formula - 1]
  }
}