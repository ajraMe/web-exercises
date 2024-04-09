const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    let secretNumber;
    do {
        secretNumber = parseInt(await prompt('Player 1, enter a number between 1 and 100: '));
    } while (isNaN(secretNumber) || secretNumber < 1 || secretNumber > 100);

    console.clear();

    let guess;
    let attempts = 0;
    do {
        guess = parseInt(await prompt('Player 2, guess the number: '));
        if (isNaN(guess) || guess < 1 || guess > 100) {
            console.log('Invalid input. Please enter a number between 1 and 100.');
        } else {
            attempts++;
            if (guess < secretNumber) {
                console.log('Too low! Try again.');
            } else if (guess > secretNumber) {
                console.log('Too high! Try again.');
            }
        }
    } while (guess !== secretNumber);

    console.log(`Congratulations! Player 2 guessed the number ${secretNumber} correctly in ${attempts} attempts.`);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());
