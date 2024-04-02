const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ["First Name", "Last Name", "Age"],
        ["Hans", "Müller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19]
    ];

    const row = parseInt(await prompt("Enter the row number: "));
    const columnName = await prompt("Enter the column name: ");
    

    if (row >= 0 && row < table.length && columnIndex !== -1) {
        console.log(`The value at row ${row} and column ${columnName} is ${table[row][columnIndex]}.`);
    } else {
        console.log("Invalid input.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());