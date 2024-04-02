const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const people = [
        {name: "Alice", age: 25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35}
    ];

    for (let person of people) {
        console.log(`Name: ${person.name}, Age: ${person.age}`);
    }
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());