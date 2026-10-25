
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function startGame() {
    console.log("================================");
    console.log("       WELCOME TO TRIVIA!");
    console.log("================================");
    console.log("Test your knowledge with a few questions!");
    console.log("Type your answer and press Enter.\n");

    rl.close();
}

startGame();
