const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const table = [
        ["Hans", "Müller", 22],
        ["Georg", "Huber", 37],
        ["Fritz", "Mayr", 19]
    ];
    const row = parseInt(await prompt("Enter the row number: "));
    const columnName = await prompt("Enter the column name: ");

    const columnIndex = table[0].indexOf(columnName);


    const columnArr ={
        FirstName: 0,
        LastName: 1,
        Age: 2,
    }
    console.log(table[row][columnArr[columnName]]);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());