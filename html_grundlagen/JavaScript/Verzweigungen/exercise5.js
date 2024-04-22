const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

rl.question("Please enter a single letter: ", checkLetter);

function checkLetter(letter) {
    switch (letter.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("The letter is a vowel.");
            rl.close();
            break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            console.log("The letter is a consonant.");
            rl.close();
            break;
        default:
            console.log("Invalid input. Please enter a letter.");
            rl.question("Please enter a single letter: ", checkLetter);
    }
}