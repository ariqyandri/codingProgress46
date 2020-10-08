const teller = {
    guess: () => {
        const millions = Math.random();
        const message = `you will earn ${millions} million euros today!`;
        return message
    }
}

console.log(teller.guess());