const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

rl.question("Please enter the temperature: ", function(temperature) {
    temperature = parseFloat(temperature);
    if (temperature < 10) {
        console.log("It's cold.");
    } else if (temperature >= 10 && temperature <= 25) {
        console.log("It's Moderate.");
    } else {
        console.log("It's hot.");
    }

    rl.close();
});
