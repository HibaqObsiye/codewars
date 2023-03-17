//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

function findAdmin(list, lang) {
    const langDeveloper = list.filter(x => x.language === lang)
       const checkAdmin = langDeveloper.filter(x => x.githubAdmin === "yes")
   
     if(checkAdmin.length === 0){
       return []
     }
     else{
       return checkAdmin
     }
}