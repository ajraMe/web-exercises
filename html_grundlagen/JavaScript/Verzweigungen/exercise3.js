const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let number = await prompt("Please enter number: ");
    number = parseInt(number);
    if (number === 1) {
        console.log("Monday");
    } else if (number === 2) {
        console.log("Tuesday");
    } else if (number === 3) {
        console.log("Wednesday");
    } else if (number === 4) {
        console.log("Thursday");
    } else if (number === 5) {
        console.log("Friday");
    } else if (number === 6) {
        console.log("Saturday");
    } else if (number === 7) {
        console.log("Sunday");
    } else {
        console.log("Invalid input. Please enter a number from 1 to 7.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());