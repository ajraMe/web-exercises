const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

function maxNumber(...numbers) {
    return Math.max(...numbers);
}

async function execute() {
    const input = await prompt("Enter up to four numbers separated by commas: ");
    const numbers = input.split(",").map(Number);
    const result = maxNumber(...numbers);
    console.log("The largest number is:", result);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
