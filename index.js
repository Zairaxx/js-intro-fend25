
//Deklarera variabel
let myVariable = "hej";
const myConstant = "då";


myVariable = "halloj!";
myConstant = "bye bye!"; //Kastar ett error

console.log(myConstant);

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

// console.log(groceryList)

// console.log('Jag behöver köpa ' + groceryList[3]);


//Funktioner