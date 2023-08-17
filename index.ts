import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
const answers :{
    num1:number,
    num2:number,
    operator:string
}= await inquirer.prompt([
{
    type:`number`,
    name:`num1`,
    message:`Enter your first number`

},
{
    name:`num2`,
    type:`number`,
    message:`Enter your second number`
},
{
    name:`operator`,
    type:`list`,
    message:`select your operator`,
    choices:[`+`,"-","*","/"]
}
])
const {num1 ,num2 , operator}=answers
if(num1 && num2 && operator){
    let result:number=0
    if(operator == `+` )
    result =num1 +num2
    else if (operator == `-`){
    result = num1-num2
    }if(operator == `*` )
    result =num1 * num2
    if(operator == `/` )
    result =num1 /num2
console.log(`your result is : ${result}`)
}else{
    console.log(`Enter a valid input`)
};