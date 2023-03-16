//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let removedElements = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 0){
        removedElements.push(arr.splice(i,1)[0])
        i--
      }
    }
    return arr.concat(removedElements)
}