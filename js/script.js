document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const nameInputScreen = document.getElementById("nameInputScreen");
    const playerNameInput = document.getElementById("playerName");
    const startGameButton = document.getElementById("startGameBtn");
    const modeSelection = document.getElementById("modeSelection");
    const difficultySelection = document.getElementById("difficultySelection");
    const gameScreen = document.getElementById("gameScreen");
    const leaderboard = document.getElementById("leaderboard");
    const fireworks = document.getElementById("fireworks");
    const modeButtons = document.querySelectorAll(".modeBtn");
    const difficultyButtons = document.querySelectorAll(".difficultyBtn");
    const tryAgainButton = document.getElementById("tryAgainBtn");
    const chooseModeButton = document.getElementById("chooseModeBtn");
    const quitGameButton = document.getElementById("quitGameBtn");
    const timerElement = document.getElementById("timer");
    const questionArea = document.getElementById("questionArea");
    const answerInput = document.getElementById("answerInput");
	const submitAnswerButton = document.getElementById("submitAnswerBtn");
    const leaderboardList = document.getElementById("leaderboardList");

    // Sounds
    const clickSound = new Audio("sounds/click.mp3");
    const tickSound = new Audio("sounds/tick.mp3");
    const buzzerSound = new Audio("sounds/buzzer.mp3");
    const correctSound = new Audio("sounds/correct.mp3");
    const wrongSound = new Audio("sounds/wrong.mp3");

    // Game State
    let playerName = "";
    let currentMode = "";
    let currentDifficulty = "";
	let gameSetting = "";
    let timer;
    let score = 0;
    let questionCount = 1;
    let highScores = JSON.parse(localStorage.getItem("highScores")) || {};

    // Start Game
    startGameButton.addEventListener("click", () => {
		clickSound.play();
        playerName = playerNameInput.value.trim();
        if (!playerName || !isNaN(playerName)) {
            alert("Please enter a valid name.");
            return;
        }
        localStorage.setItem("playerName", playerName);
        nameInputScreen.classList.add("hidden");
        modeSelection.classList.remove("hidden");
    });

    // Select Game Mode
    modeButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            clickSound.play();
            currentMode = e.target.dataset.mode;
            modeSelection.classList.add("hidden");
            difficultySelection.classList.remove("hidden");
        });
    });

    // Select Game Difficulty
    difficultyButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            clickSound.play();
            currentDifficulty = e.target.dataset.difficulty;
			gameSetting = currentMode+'-'+currentDifficulty;
            difficultySelection.classList.add("hidden");
            startGame(gameSetting);
        });
    });
	
    // Validate Answer
    submitAnswerButton.addEventListener("click", () => {
		clearInterval(timer);
		clickSound.play();
		
		const userAnswer = parseFloat(answerInput.value);
		const correctAnswer = localStorage.getItem("correctAnswer");

		if(userAnswer == correctAnswer) {
			correctSound.play();
			score++;
			if(questionCount == 10) {
				endGame();
			} else {
				questionCount++;
			}
			generateQuestion(gameSetting);
			startTimer();
		} else {
			wrongSound.play();
			if(currentDifficulty == "Guru") {
				endGame();
			} else {
				if(questionCount == 10) {
					endGame();
				} else {
					questionCount++;
				}
				generateQuestion(gameSetting);
				startTimer();

			}
		}
    });


    // Start Game Mode
    function startGame(gameSetting) {
		questionCount = 1;
        gameScreen.classList.remove("hidden");
        generateQuestion(gameSetting);
        startTimer();
    }

    // Generate Random Question
    function generateQuestion(gameSetting) {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator =
            gameSetting.includes("Addition")
                ? "+"
                : gameSetting.includes("Subtraction")
                ? "-"
                : gameSetting.includes("Multiplication")
                ? "*"
                : "/";

        const correctAnswer = eval(`${num1} ${operator} ${num2}`);
        questionArea.innerText = `${num1} ${operator} ${num2}`;
        localStorage.setItem("correctAnswer", correctAnswer);
    }

    // Timer
    function startTimer() {
        let timeLeft = 10;
        timerElement.innerText = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            timerElement.innerText = timeLeft;
            tickSound.play();

            if (timeLeft <= 0) {
                clearInterval(timer);
                buzzerSound.play();
                endGame();
            }
        }, 1000);
    }

    // End Game
    function endGame() {
        gameScreen.classList.add("hidden");
        leaderboard.classList.remove("hidden");
        updateLeaderboard();
    }

    // Update Leaderboard
    function updateLeaderboard() {
        const modeScores = highScores[gameSetting] || [];
        modeScores.push(score);
        modeScores.sort((a, b) => b - a); // Sort descending
        highScores[gameSetting] = modeScores.slice(0, 10); // Top 10 scores
        localStorage.setItem("highScores", JSON.stringify(highScores));

        leaderboardList.innerHTML = "";
        highScores[gameSetting].forEach((score, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1}. ${score}`;
            if (index === 0) li.style.fontWeight = "bold"; // Highlight top score
            leaderboardList.appendChild(li);
        });
    }

    // Buttons
    tryAgainButton.addEventListener("click", () => {
        leaderboard.classList.add("hidden");
        startGame(gameSetting);
    });

    chooseModeButton.addEventListener("click", () => {
        leaderboard.classList.add("hidden");
        modeSelection.classList.remove("hidden");
    });

    quitGameButton.addEventListener("click", () => {
		score = 0;
		questionCount = 0;
        localStorage.removeItem("playerName");
        leaderboard.classList.add("hidden");
        nameInputScreen.classList.remove("hidden");
    });
});
