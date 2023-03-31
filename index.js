const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const arrayOfDriverObjs = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(arr,string){
   const match = arr.filter(function(name){
    if(name === string || name.toLowerCase() === string.toLowerCase() || name.toUpperCase() === string.toUpperCase()){
        return string
    }
   })
   return match
}
findMatching(drivers,'BOBBY');
console.log(findMatching(drivers,'BOBBY'));

function fuzzyMatch(arr,string){
    const letterMatch = arr.filter(function(name){
        if (name.startsWith(string))
        return name
    })
    return letterMatch
}
fuzzyMatch(drivers,'Bo')
console.log(fuzzyMatch(drivers,'Bo'))

function matchName(arr,string){
    const newArr = arr.filter(function(obj){
        if(string === obj.name){
            return obj.name
        }
    })
    return newArr
}

matchName(arrayOfDriverObjs,"Bobby")
console.log(matchName(arrayOfDriverObjs,'Bobby'))
