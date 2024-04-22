const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

const CORRECT_PASSWORD = "ahmed";

async function execute() {
    // Euer Code kommt hier hinein
    const inputPassword = await prompt("Please enter the password: ");

    if (inputPassword === CORRECT_PASSWORD) {
        console.log("Correct password. Access granted.");
    } else {
        console.log("Incorrect password. Access denied.");
    }
    // Ende von eurem Code
}
execute().catch((err) => { console.error(err); }).finally(() => rl.close());

