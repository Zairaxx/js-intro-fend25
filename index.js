

//Deklarera variabel
let myVariable = "hej";
const myConstant = "då";


myVariable = "halloj!";
// myConstant = "bye bye!"; //Kastar ett error

// console.log(myConstant);

//Definiera en variabel
myVariable = "Value";

//Data types

//String
let myName = "Hej"

//Number - (Integer, bigInt, float, double)
let myAge = 31;

//Boolean
let isFrontendDeveloper = true;

//Undefined

let myUndefined;

// null

let myIceCream = null;

//Objekt 

let person = {
    //key : value
    name:"Brandon",
    age:31,
    isFrontendDeveloper:true,
    favoriteFoods: ["Tacos","Pasta"],
    address: {
        postCode:12184,
        street: "Ringvägen"
    }
}

// console.log(person.favoriteFoods[0])


// console.log("Hej " + person.name);

// Array

let groceryList = ["Banan","Mango","Tvättmedel","Tvål"];

let aName = "Brandon";
// console.log(aName.length); //Property === key:value i ett objekt

// console.log('Jag behöver köpa ' + groceryList[3]);


//Funktioner & Metoder

function greeting(){
    console.log("Hej och välkommen!");
}

// greeting();

//Metod - Funktion i ett objekt
let animal = {
    type:"Horse",
    sound: function () {
        console.log("Neeiighhh!")
    }
}
//Anropa sound-metoden i animal
// animal.sound()


//Funktioner med input/parametrar

function greetMe(namn,age) {
    return("Hej och välkommen, " + namn + " din snygga " + age + "-åring!");
}

function addTwo(num){
    return num +2;
}

let result = addTwo(10);

console.log(result);

//vi kör funktionen med två argument

let myGreeting = greetMe("Brandon",88);
console.log(myGreeting);