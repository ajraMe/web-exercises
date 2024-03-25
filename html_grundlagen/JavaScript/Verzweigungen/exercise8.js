const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));

rl.on('close', () => process.exit(0));

async function execute() {
    // Set the password
    const correctPassword = "Pass123";

    // Read password from the user
    let userPassword = await prompt("Please enter the password: ");

    // Check if the entered password is correct
    if (userPassword === correctPassword) {
        console.log("The password is correct.");
    } else {
        console.log("The password is incorrect.");
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
