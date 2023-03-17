//Create a function that takes two arguments:

// An array of objects which feature the season, the team and the country of the Champions League winner.

// Country (as a string, for example, 'Portugal')

function countWins(winnerList, country) {
    const checkingCountry = winnerList.filter(x => x.country === country)
    return checkingCountry.length
}