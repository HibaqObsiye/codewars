//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

function getFirstPython(list) {
    const checkPythonDev = list.filter(x => x.language === 'Python')
   
    if(checkPythonDev.length === 0){
      return 'There will be no Python developers'
    }
    else{
      for(item of checkPythonDev){
      return `${item.firstName}, ${item.country}` 
      }
    }
}