// Given an array of strings representing a list of usernames, return true only if all usernames comply with your company's guidelines. Return false otherwise.

function authList(arr) {
    let checker = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}$/
     for(name of arr){
       if(!checker.test(name)){
         return false
       }
     }
     return true
}