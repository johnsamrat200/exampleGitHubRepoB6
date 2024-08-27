//Alert 
alert("Welcome to john's website");
//Prompts
let names = prompt("What is your name?");
alert("Hello ," + names + "!");
//Arithemetic operators
let a=100;
let b=6;
 // addition
console.log(a+b);
// subraction
console.log(a-b);
//multiplication
console.log(a*b);
//division
console.log(a/b);
//modulus
console.log(a%b);
//exponentiation
console.log(a**b);
//Logical Operators
let a = true;
let b = false;
//AND operator
console.log(a&&b);
//OR Operator
console.log(a||b);
//NOT operator
console.log(!a);
//Variables
var name = "john";
let age = 26;
const country = "Tamilnadu";

console.log(name);  
console.log(age); 
console.log(country); 




//Interview Question As Task.
function outer(){
    console.log("john");
    function inner(){
        console.log("samrat");

    }return inner();
}
let inner1 = outer();

