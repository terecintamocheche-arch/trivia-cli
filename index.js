

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

let score = 0;

function askQuestion(currentQuestion, index) {
    return new Promise(function(resolve) {
        console.log("\nQuestion " + (index + 1) + ":");
        console.log(currentQuestion.question);

        currentQuestion.options.forEach(function(option) {
            console.log(option);
        });

        rl.question("Your answer (A, B, C, or D): ", function(userAnswer) {
            const answer = userAnswer.trim().toUpperCase();

            if (answer === currentQuestion.answer) {
                console.log("Correct! Well done!");
                score++;
                resolve();
            } else {
                console.log("Incorrect!");
                console.log("Correct answer: " + currentQuestion.answer);
                resolve();
            }
        });
    });
}

async function startGame() {
    console.log("================================");
    console.log("       WELCOME TO TRIVIA!");
    console.log("================================");

    const questionTexts = questions.map(function(item) {
        return item.question;
    });

    console.log("Get ready for " + questionTexts.length + " questions!");
    console.log("The timer starts now.\n");

    const startTime = Date.now();

    const timer = setInterval(function() {
        // Update the elapsed time every second.
    }, 1000);

    for (let i = 0; i < questions.length; i++) {
        await askQuestion(questions[i], i);
    }

    clearInterval(timer);

    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    console.log("\n================================");
    console.log("           GAME OVER!");
    console.log("================================");
    console.log("Your score: " + score + "/" + questions.length);
    console.log("Time taken: " + timeTaken + " seconds");

    if (score === questions.length) {
        console.log("Excellent! You got every question right!");
    } else if (score >= 2) {
        console.log("Good job! Keep practising!");
    } else {
        console.log("Keep learning and try again!");
    }

    rl.close();
}

startGame();

