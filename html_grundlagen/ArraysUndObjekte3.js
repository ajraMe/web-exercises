const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ["First Name", "Hans", "Georg", "Fritz"],
        ["Last Name", "Müller", "Huber", "Mayr"],
        ["Age", 22, 37, 19]
    ];

    const row = parseInt(await prompt("Enter the row number: "));
    const column = parseInt(await prompt("Enter the column number: "));

    if (row >= 0 && row < table.length && column >= 0 && column < table[0].length) {
        console.log(`The value at row ${row} and column ${column} is ${table[row][column]}.`);
    } else {
        console.log("Invalid input.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());