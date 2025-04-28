"use strict"; // treat all code as a newer version through the js engine

// alert("hi")
// this alert is not use in nodejs, because this all the js engine are in web browser and here we are not using any browser. this will work in web browser.

console.log(3*3)
console.log("ram")

let name = "vicky"      // this is string data types
let age = 26            // this is number data types
let is_logged_in = true     // this is boolean data types

/*
data types:
--------------------
    number => range 2 to the power of 53
    bigInt => 
    string => ""
    boolean => true / false
    null => stand alone value (reprenstation of empty value) example -> suppose we request to server that i want to know the temprature and as a result he will not give value of zero (suppose we getting issue in server, and if he return the value of zero as a temparature then the value is wrong in that case we prefer null.)
    undefined => 
    empty string is another and null is another, both are diffrent.
    symbol => used for uniqque



    object => non-primitive data types
*/

console.log(typeof null)

console.log(typeof undefined)


let num_id = 76;
const result = num_id + 4;      // here plus sign adding with the varibale num_id, result => 80
console.log(result);

const result1 = num_id + "435";   // here plus sign making him concate with the variable that is num_id, result => 76435
console.log(result1);