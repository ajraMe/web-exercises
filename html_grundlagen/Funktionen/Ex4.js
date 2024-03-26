const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const log = (...variables) => console.log(...variables);

async function execute() {
    const inputString = await prompt("Enter the variables to log: ");
    log(inputString);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
