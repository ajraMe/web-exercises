const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const userInput = parseInt(await prompt("Please enter a number from 1 to 7: "));

    if (userInput >= 1 && userInput <= 7) {
        console.log(`The day of the week is ${daysOfWeek[userInput - 1]}.`);
    } else {
        console.log("Invalid input.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());