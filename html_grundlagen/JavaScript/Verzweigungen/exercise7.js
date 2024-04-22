const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    const num1 = parseFloat(await prompt("Please enter the first number: "));
    const num2 = parseFloat(await prompt("Please enter the second number: "));
    const num3 = parseFloat(await prompt("Please enter the third number: "));
    const num4 = parseFloat(await prompt("Please enter the fourth number: "));

    let largest = num1;
    if (num2 > largest) largest = num2;
    if (num3 > largest) largest = num3;
    if (num4 > largest) largest = num4;
    console.log(`The largest number is: ${largest}`);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
