//You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

function sortByLanguage(list) {
    return list.sort((a,b) => {
     if (a.language === b.language) {
       return a.firstName.localeCompare(b.firstName);
     } else {
       return a.language.localeCompare(b.language);
     }
   });
 
}