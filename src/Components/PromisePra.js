const myPromise = new Promise((resolve, reject) =>{
   let connection = false;
   if(connection){
    resolve('its now connected')
   }else{
    reject('internet not strong')
   }
}).then((message) =>{
    console.log(message)
}).catch((message) =>{
    console.log(message)})//
const people = [
    {
        name: "Adaeze",
        age: 10,
    },
    {
        name: "chioma",
        age: 5,
    },
    {
        name: "Obi",
        age: 1,
    },
    {
        name: "ifeanyi",
        age: 15,
    },
    {
        name: "chisom",
        age: 30,
    }
]
console.log(people)
const oldPeople = people.filter((person) => person.age <= 10)
console.log(oldPeople)

let competitors = ["Anna", "Beth", "Cara", "David"]

function displayWinners(name, index, array) {
    let isNextItem = index + 1 < array.length ? true : false
    if (isNextItem) {
    	console.log(`The No${index+1} winner is ${name}.`);
    } else {
    	console.log(`Sorry, ${name} is not one of the winners.`)
    }
}

competitors.filter((name, index, array) => displayWinners(name, index, array))

