//let os = require("os"); 
// import os from "os" ; 
// console.log(" .... Most of the Js framework display os details....");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.version());
// console.log(os.platform());


import readline from "readline-sync" ; 
// let text = readline.question("Enter a text:\n "); 
// let number = readline.questionInt("Enter a number\n"); 
// let display = readline.question("Display input y/n:\n "); 
// let password = readline.questionNewPassword("Enter new Password:\n "); 
// let email = readline.questionEMail("Enter the email:\n"); 

// if(display.toLowerCase()=="y")
// {
//     console.log("Text is", text);
//     console.log("Number is", number); 
    
// }

import fs from "fs" ; 




// let text = readline.question("Enter some text"); 

// fs.writeFileSync("demo.txt",text,{flag:"a+"}); 
// console.log("Sucess");

// let fileData = fs.readFileSync("demo.txt"); 
// console.log(fileData.toString());

// let obj = {
//     "id":1,
//     "name":"aryan"
// }

// let jsondata = JSON.stringify(obj); 

// fs.writeFileSync("tp.json",jsondata); 
// console.log("success"); 


import { Employee } from "./Employee.js";
// const employee = new Employee(1,"Aryan",73500); 
// employee.display(); 


let id = readline.question("Enter your ID: ");
let name = readline.question("Enter your name: ");
let salary = readline.questionInt("Enter your salary: ");

const employee = new Employee(id, name, salary);


let employees = [];

if (fs.existsSync("employees.json")) {
    const data = fs.readFileSync("employees.json", "utf-8");
    if (data) {
        employees = JSON.parse(data);
    }
}
console.log(employees); 
employees.push(employee);

fs.writeFileSync("employees.json", JSON.stringify(employees,2), { flag: "w" });

//employee.display();





