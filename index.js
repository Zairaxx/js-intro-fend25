//Uppgift 1

let myName = "Brandon";
let age = 31;
let favoriteDestination = "Gotland";
let siblings = 4;
let hasPets = true;

// console.log("Hej! Jag heter " + myName + ". Jag är " + age + " år gammal. Jag tycker om att resa till " + favoriteDestination + ", och har " + siblings + " syskon." + "Har jag husdjur? Svar: " + hasPets);

//Uppgift 2

let favoriteFruits = ["Banan","Kiwi","Passionfrukt", "Äpple", "Apelsin"];

favoriteFruits.push("Mango");

// console.log(favoriteFruits[0], favoriteFruits[3]);
console.log(favoriteFruits);

//Uppgift 3

let favoriteMovies = ["Insidious", "Blue", "Harry Potter", "Gladiator", "Matrix", "Sagan om ringen"]

let lastMovie = favoriteMovies.pop();

// console.log("Sista filmen: " + lastMovie);
// console.log(favoriteMovies[favoriteMovies.length-1]);
// console.log(favoriteMovies[favoriteMovies.length-2]);


//Uppgift 4

let pet = {
    name: "Kobe",
    type: "Dog",
    age: 3,
    breed: "poodle",
    isHerbivore : true,
    sound: function (){
        console.log("Woof woof!");
    },
    "Best Friend": {
        name: "Lola",
        type: "Cat",
        age: 7,
        breed: "bondkatt",
        isHerbivore : false,
    }
}

pet.sound();


console.log(pet["Best Friend"].name)