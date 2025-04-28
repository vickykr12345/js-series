const account_id = 14452;
let account_email = "smashub@gmail.com";
var account_password = "qwerty"
account_city = "kolkata"
let account_state;

// account_state = "west bengal"

/*
we not use var keyword as a varibale because it has issue in block scope and funcional scope.
as a example we create a variable name as var acc_password and after some time i create a function and we create a new varibale in that function as acc_password when we check the result the varibale of acc_password outside the function both value was changed, this will create huge problem , that's why we do not use var keyword as a varibale.
*/
account_city = "bihar"
account_email = "securesmashub@gmail.com"
account_password = "qwerty12345"

// account_id = 234
// when we declare a value to const and after reasssigning the const. it will not allowed, because the const variable is not redeclared. 

console.log(account_email)

console.table([account_email, account_id, account_password, account_city, account_state]) 
// console.table help to display all varibale and const values in a single table. we only have to do write all variable in square braces sperated by comma.