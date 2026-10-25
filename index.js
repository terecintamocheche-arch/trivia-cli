

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "What is the capital city of Kenya?",
        options: ["A. Mombasa", "B. Nairobi", "C. Kisumu", "D. Nakuru"],
        answer: "B"
    },
    {
        question: "Which language runs in a web browser?",
        options: ["A. Python", "B. C++", "C. JavaScript", "D. Java"],
        answer: "C"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "A. Hyper Text Markup Language",
            "B. High Tech Modern Language",
            "C. Home Tool Markup Language",
            "D. Hyper Transfer Machine Language"
        ],
        answer: "A"
    }
];

function askQuestion(index) {
    const currentQuestion = questions[index];

    console.log("\n" + currentQuestion.question);

    currentQuestion.options.forEach(function(option) {
        console.log(option);
    });

    rl.question("Your answer (A, B, C, or D): ", function(userAnswer) {
        console.log("You selected: " + userAnswer);
        rl.close();
    });
}

function startGame() {
    console.log("================================");
    console.log("       WELCOME TO TRIVIA!");
    console.log("================================");
    console.log("Test your knowledge with a few questions!");
    console.log("Type your answer and press Enter.\n");

    askQuestion(0);
}

startGame();
