const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        {"First Name": "Hans", "Last Name": "Müller", "Age": 22},
        {"First Name": "Georg", "Last Name": "Huber", "Age": 37},
        {"First Name": "Fritz", "Last Name": "Mayr", "Age": 19}
    ];

    const row = parseInt(await prompt("Enter the row number: "));
    const columnName = await prompt("Enter the column name: ");

    const rowData = table[row];
    if (rowData && columnName in rowData) {
        console.log(`The value at row ${row} and column ${columnName} is ${rowData[columnName]}.`);
    } else {
        console.log("Invalid input.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());