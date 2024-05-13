#! /usr/bin/env node
//Currency Converter Project by Irfan Memon
console.log("********************************************* Welcome to Memon's Coding Project *********************************************");

import inquirer from "inquirer"
const currency: any = {
PKR: 1, //Base currency
EUR: 0.0033,
GBP: 0.0029,
INRS: 0.30,
UKP: 0.0029,
SAR: 0.013,
USD: 0.0036,
};



let user_answer = await inquirer.prompt ([
    
    
    {
name: "from",
message: "Enter from currency",
type: "list",
choices: ["PKR", "USD", "EUR", "GBP", "INRS", "UKP", "SAR"]
    },{
name: "to",
message: "Enter to currency",
type: "list",
choices: ["PKR", "USD", "EUR", "GBP", "INRS", "UKP", "SAR"]
    },{

name: "amount",
message: "Enter your Amount",
type: "number",
}

])

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount           //3rd question *user amount*
let baseAmount = amount/fromAmount
let convertedAmount = baseAmount*toAmount
console.log(convertedAmount);