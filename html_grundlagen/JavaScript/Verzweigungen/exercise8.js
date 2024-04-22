const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

async function determineNumberType() {
    const userInput = await new Promise((resolve) => {
        rl.question("Please enter a number: ", resolve);
    });
    const number = parseFloat(userInput);
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        const isInteger = Number.isInteger(number);
        const isEven = number % 2 === 0;

        if (isInteger) {
            if (isEven) {
                console.log(`${number} is an even number.`);
            } else {
                console.log(`${number} is an odd number.`);
            }
        } else {
            console.log(`${number} is a decimal number.`);
        }
    }

    rl.close();
}

determineNumberType();
