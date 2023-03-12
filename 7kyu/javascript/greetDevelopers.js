function greetDevelopers(list) {
    let greeting = {}
    for(item of list){
      item.greeting = `Hi ${item.firstName}, what do you like the most about ${item.language}?`
    }
    return list
}