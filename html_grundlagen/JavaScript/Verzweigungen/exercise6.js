const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("Please enter the first number: ", function (num1) {
    rl.question("Please enter the second number: ", function (num2) {
        rl.question("Please enter an arithmetic operator (+, -, *, /): ", function (operator) {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            let result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        console.log("Error: Division by zero.");
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log("Invalid operator.");
                    rl.close();
                    return;
            }

            console.log(`Result of ${num1} ${operator} ${num2} = ${result}`);
            rl.close();
        });
    });
});

