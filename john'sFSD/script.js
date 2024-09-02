// // //Alert 
// // alert("Welcome to john's website");
// // //Prompts
// // let names = prompt("What is your name?");
// // alert("Hello ," + names + "!");
// // //Arithemetic operators
// // let a=100;
// // let b=6;
// //  // addition
// // console.log(a+b);
// // // subraction
// // console.log(a-b);
// // //multiplication
// // console.log(a*b);
// // //division
// // console.log(a/b);
// // //modulus
// // console.log(a%b);
// // //exponentiation
// // console.log(a**b);
// // //Logical Operators
// // let a = true;
// // let b = false;
// // //AND operator
// // console.log(a&&b);
// // //OR Operator
// // console.log(a||b);
// // //NOT operator
// // console.log(!a);
// // //Variables
// ////var is Function Scoped/Globally Scoped.hoisted and initialized with undefined.
// // var name = "john";
// // console.log(name); 
// ////let is block-scoped.hoisted but not initialized.
// // let age = 26;
// // console.log(age); 
// ////const is block-scoped constant ,cannot be reassigned.
// // const country = "Tamilnadu";
// // console.log(country);
// ////datatypes:-
// ////string
// //let greeting="Hello,World!";
// ////number:-
// //let score = 100;
// //let temperature = 50.4;
// ////boolean:-
// //let isLoggedIn = true;
// //let isLoggedIn = false;
// ////null:-
// //let empty = null;
// ////Object:-A Complex Datatype Used To Store Collections of Data.
// /*let person = {
// name:"John",
// age:"26",
// isStudent:false
// };
// */
// ////Array:-A Special Type of Object Used to Store Lists of Values.
// // let numbers = [1,2,3,4,5,6,7,8,9];
// const arrfun = ()=>{
//     console.log("arrow function");
// }
// arrfun()
// function hof(){
//     console.log("higher order");
//     return function retfun() {
//         console.log("retfun");
//     }
// }
// const retres=hof();
// retres()

// let loggin = false;
// if (loggin==true) {
//     console.log("logged in");
// } else {
//     console.log("not loggined");
// }
 
// let money =700;
// if (money >=1000) {
//     console.log(">=1000");
// } else if(money>=900){
//     console.log(">=900");
// } else if(money>=800){
//     console.log(">=800");
// } else if(money>=700){
//     console.log(">=700");
// }else{
//     console.log("low money");
// }

// let loggin= true;
// const res = loggin = true?"home":"register";
// console,console.log(res); 

// let order = 1;
// let msg;
// switch (order) {
//     case 1:
//         msg = 'ordered laptop';
//         break;
//     case 2 :
//         msg ='ordered mobile';
//         break;
//     default:
//         msg ='invalid';
// }
// console.log(msg);

// let i=2;
// while (i<=5) {
//     console.log("i=",i)
//     i++;
// }

// let i=3;
// do {
//     console.log("i",i);
//     i--;
// } while (i>=0);

// for (let i = 1; i < 5; i++) {
//     console.log("i",i);
//     console.log("welcome");
// }

// let arr = [100,200,300,400,500];
// console.log(arr.length);
// console.log(arr);
// arr.push(600)
// console.log(arr)
// arr.pop();
// console.log(arr);
// arr.unshift(1000);
// console.log(arr)
// arr.shift();
// console.log(arr);
// const retSlice=arr.slice(1,4);
// console.log(retSlice);

// let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// console.log(upperCaseFruits); // ["APPLE", "KIWI", "MANGO"]


// let filteredFruits = fruits.filter(fruit => fruit.length > 4);
// console.log(filteredFruits); // ["apple", "mango"]

// fruits.forEach(fruit => console.log(fruit));

// // //Interview Question As Task.
// // function outer(){
// //     console.log("john");
// //     function inner(){
// //         console.log("samrat");

// //     }return inner();
// // }
// // let inner1 = outer();

