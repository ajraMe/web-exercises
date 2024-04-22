const readline = require('readline');
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
rl.on('close', () => process.exit(0));

async function execute() {
    const favoriteVehicle = {
        type: "Car",
        brand: "Tesla",
        model: "Model 3",
        color: "blue",
        year: 2022,
        isElectric: true
    };

    console.log(`My favorite vehicle is a ${favoriteVehicle.type} ${favoriteVehicle.brand} ${favoriteVehicle.model} in ${favoriteVehicle.color}, manufactured in ${favoriteVehicle.year}. It is ${favoriteVehicle.isElectric ? 'electric' : 'not electric'}.`);
}

execute().catch((err) => {
    console.error(err);
}).finally(() => rl.close());