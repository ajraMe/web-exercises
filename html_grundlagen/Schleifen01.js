const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let dayNumber;
    do {
        dayNumber = parseInt(await prompt('Please enter a weekday number (1-7): '));
    } while (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7);

    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    console.log(`The weekday is ${daysOfWeek[dayNumber - 1]}.`);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());