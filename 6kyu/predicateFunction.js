function takeWhile (arr, pred) {
    let array = []
   for(let i = 0; i < arr.length; i++){
     if(pred(arr[i])){
       array.push(arr[i])
     }
     else{
       break;
     }
   }
   return array
}