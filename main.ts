import inquirer from "inquirer";
let myBalance = 10000;   //in Doller 
let pinCode = 1234;
 
let pinAnswer = await inquirer.prompt(
   [
       {
         name: "pin",
         type: "number",
         message:"enter your pin",
        }
    ]
);

if(
    pinAnswer.pin  === pinCode
)
    console.log("correct pin code!!!");

let operationAnswer = await inquirer.prompt(
    [
        {
         name: "operation",
         type: "list",
         message: "please select any one option",
        choices: ["withdraw", "check balance"]
        }
        
    ]
);
    let findAmount = await inquirer.prompt(
    [
        {
         name: "amount",
         type: "number",
         message:"enter your amount to withdraw"
        }
    ]    
);
if(findAmount.amount > myBalance){
    console.log("insufficent balance");
    
}
if(
    myBalance -= findAmount.amount)
    {console.log(`${findAmount.amount} with draw successfully!`);
    console.log(`your remaining balance is: ${myBalance}`);
    console.log(`your current balance is: ${myBalance}`);
}
if(
    operationAnswer.operation === myBalance)
    console.log(`your current balance is: ${myBalance}`);
    
