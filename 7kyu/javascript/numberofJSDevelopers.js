//You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

function countDevelopers(list) {
    const requirements = list.filter(x => x.language === 'JavaScript' && x.continent === 'Europe')
    
      return requirements.length
}