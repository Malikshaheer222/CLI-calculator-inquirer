import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: `number`,
        name: `num1`,
        message: `Enter your first number`
    },
    {
        name: `num2`,
        type: `number`,
        message: `Enter your second number`
    },
    {
        name: `operator`,
        type: `list`,
        message: `select your operator`,
        choices: [`+`, "-", "*", "/"]
    }
]);
const { num1, num2, operator } = answers;
if (num1 && num2 && operator) {
    let result = 0;
    if (operator == `+`)
        result = num1 + num2;
    else if (operator == `-`) {
        result = num1 - num2;
    }
    if (operator == `*`)
        result = num1 * num2;
    if (operator == `/`)
        result = num1 / num2;
    console.log(`your result is : ${result}`);
}
else {
    console.log(`Enter a valid input`);
}
;
