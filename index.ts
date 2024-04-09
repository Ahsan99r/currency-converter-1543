#! /usr/bin/env node
import inquirer from 'inquirer';

const currency: any = {
    "USD": 1, // Base currency
    "EUR": 1.15,
    "GBP": 1.25,
    "INR": 74.57,
    "JPY": 120,
    "CAD": 1.3,
    "PKR": 277.7,
    "NZD": 1.5,
    "AUD": 1.7,
}
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP","INR", "JPY", "CAD", "PKR", "NZD", "AUD"]
    },
    {
        name: "to_currency",
        message: "Enter your currency",
        type: "list",
        choices: ["USD", "EUR", "GBP","INR", "JPY", "CAD", "PKR", "NZD", "AUD"]
    },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number",
        }
    ]
)
//console.log(user_answer);

let from_amount = currency[user_answer.from_currency];
let to_amount = currency[user_answer.to_currency];
let amount = user_answer.amount;
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(converted_amount);