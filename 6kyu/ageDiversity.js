//You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if developers from all of the following age groups have signed up: teens, twenties, thirties, forties, fifties, sixties, seventies, eighties, nineties, centenarian (at least 100 years young).
// false otherwise.

// Initialize an array to keep track of which age groups are present
let ageGroupsPresent = [];

// Loop through each developer in the list
for (let i = 0; i < list.length; i++) {
  // Get the developer's age and determine which age group they belong to
  let age = list[i].age;
  let ageGroup = Math.floor(age / 10) * 10;
  
  // If the current age group is not already in the ageGroupsPresent array, add it
  if (!ageGroupsPresent.includes(ageGroup)) {
    ageGroupsPresent.push(ageGroup);
  }
}

// Check if all age groups from 10 to 100 are present, with increments of 10
for (let i = 10; i <= 100; i += 10) {
  if (!ageGroupsPresent.includes(i)) {
    // If any age group is missing, return false
    return false;
  }
}

// If all age groups are present, return true
return true;