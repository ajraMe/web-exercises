function getRandomNumber(min, max, isInteger) {
    let randomNumber = Math.random() * (max - min) + min;
    if (isInteger) {
        return Math.round(randomNumber);
    } else {
        return randomNumber;
    }
}

console.log(getRandomNumber(1, 10, true));
console.log(getRandomNumber(1, 10, false));