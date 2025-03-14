document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const nameInputScreen = document.getElementById("nameInputScreen");
    const playerNameInput = document.getElementById("playerName");
    const startGameButton = document.getElementById("startGameBtn");
    const modeSelection = document.getElementById("modeSelection");
    const difficultySelection = document.getElementById("difficultySelection");
    const gameScreen = document.getElementById("gameScreen");
    const endGameScreen = document.getElementById("endGameScreen");
	const highScoreMessage = document.getElementById("highScoreMessage");
    const leaderboard = document.getElementById("leaderboard");
    const fireworks = document.getElementById("fireworks");
    const modeButtons = document.querySelectorAll(".modeBtn");
    const difficultyButtons = document.querySelectorAll(".difficultyBtn");
    const tryAgainButton = document.getElementById("tryAgainBtn");
    const chooseModeButtons = document.querySelectorAll(".chooseModeBtn");
    const quitGameButton = document.getElementById("quitGameBtn");
    const timerElement = document.getElementById("timer");
    const questionArea = document.getElementById("questionArea");
    const answerInput = document.getElementById("answerInput");
	const submitAnswerButton = document.getElementById("submitAnswerBtn");
	const playerScore = document.getElementById("score");
    const leaderboardList = document.getElementById("leaderboardList");
    

    // Sounds
    const clickSound = new Audio("sounds/click.mp3");
    const tickSound = new Audio("sounds/tick.mp3");
    const buzzerSound = new Audio("sounds/buzzer.mp3");
    const correctSound = new Audio("sounds/correct.mp3");
    const wrongSound = new Audio("sounds/wrong.mp3");
    const fireworksSound = new Audio("sounds/fireworks.mp3");

	tickSound.currentTime = 1;
    

    // Game State
    let playerName = "";
    let currentMode = "";
    let currentDifficulty = "";
	let gameSetting = "";
    let timer;
    let score = 0;
    let questionCount = 0;
    let highScores = JSON.parse(localStorage.getItem("highScores")) || {};

    // Start Game
    startGameButton.addEventListener("click", () => {
		clickSound.play();
        playerName = playerNameInput.value.trim();
        if (!playerName || !isNaN(playerName)) {
            alert("Please enter a valid name.");
            return;
        }
        sessionStorage.setItem("playerName", playerName);
        nameInputScreen.classList.add("hidden");
        modeSelection.classList.remove("hidden");
    });

    // Select Game Mode
    modeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            clickSound.play();
            currentMode = e.target.dataset.operation;
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
            sessionStorage.setItem("gameSetting", gameSetting)
            difficultySelection.classList.add("hidden");
            startGame(gameSetting);
        });
    });
	
    // Validate Answer
    submitAnswerButton.addEventListener("click", () => {
		const userAnswer = parseFloat(answerInput.value);
		const correctAnswer = sessionStorage.getItem("correctAnswer");

		stopTimer();
		
		if(userAnswer == correctAnswer) {
			correctSound.play();
			score++;
			if(questionCount == 10 && currentDifficulty == "Classic") {
				endGame();
			} else {
				generateQuestion(gameSetting);
				startTimer();
			}
		} else {
			wrongSound.play();
			if(currentDifficulty == "Guru") {
				endGame();
			} else {
				if(questionCount == 10) {
					endGame();
				}
				
                generateQuestion(gameSetting);
				startTimer();
			}
		}
    });


    // Start Game
    function startGame(gameSetting) {
        gameScreen.classList.remove("hidden");
        generateQuestion(gameSetting);
        startTimer();
    }

    // Generate Random Question
    function generateQuestion(gameSetting) {
        questionCount++;
		answerInput.value = "";
		answerInput.focus();
        
        let range = 10;
        if(gameSetting.includes("Guru")) {
            range += Math.floor(questionCount / 10) * 10;
        }
        
        let num1 = Math.floor(Math.random() * range) + 1;
        let num2 = Math.floor(Math.random() * range) + 1;
        const operator =
            gameSetting.includes("Addition")
                ? "+"
                : gameSetting.includes("Subtraction")
                ? "-"
                : gameSetting.includes("Multiplication")
                ? "*"
                : "/";
        
        if(currentMode === "Division") {
 
            while(num1 % num2 != 0 || num1 == num2) {
                num1 = Math.floor(Math.random() * range) + 2;
                num2 = Math.floor(Math.random() * range) + 2;
            }
        }
        
        const correctAnswer = eval(`${num1} ${operator} ${num2}`);
        questionArea.innerText = `${num1} ${operator} ${num2}`;
        sessionStorage.setItem("correctAnswer", correctAnswer);
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
				tickSound.pause();
				tickSound.currentTime = 0;
                buzzerSound.play();
                endGame();
            }
        }, 1000);
    }

	function stopTimer() {
		if (timer) {
			tickSound.pause();
			tickSound.currentTime = 1;
			clearInterval(timer);
			timer = null; // Reset the timer variable
		}
	}
    // End Game
    function endGame() {
		stopTimer();
		buzzerSound.pause();
		buzzerSound.currentTime = 0;
		wrongSound.pause();
		wrongSound.currentTime = 0;
        gameScreen.classList.add("hidden");
		endGameScreen.classList.remove("hidden");
		playerScore.innerHTML = score;
		leaderboard.classList.remove("hidden");
		checkHighScore();
		updateLeaderboard();
	}
	
	// Check Highscore
	function checkHighScore() {
		if(highScores[gameSetting]) {
			const modeScores = highScores[gameSetting];
			const playerIndex = modeScores.findIndex(entry => entry.name === playerName);

			if (playerIndex !== -1) {
				if (score > modeScores[playerIndex].score) {
					highScoreMessage.classList.remove("hidden");
					triggerFireworks();
				}
			}
		}
		
	}

    // Update Leaderboard
	function updateLeaderboard() {
		// Initialize if no high scores exist for the mode
		if (!highScores[gameSetting]) {
			highScores[gameSetting] = []; 
		}

		const modeScores = highScores[gameSetting];
		const playerIndex = modeScores.findIndex(entry => entry.name === playerName);


		if (playerIndex !== -1) {
			if (score > modeScores[playerIndex].score) {
				modeScores[playerIndex].score = score;
			}
		} else {
			modeScores.push({ name: playerName, score: score });
		}

		modeScores.sort((a, b) => b.score - a.score);
		highScores[gameSetting] = modeScores.slice(0, 10);
		localStorage.setItem("highScores", JSON.stringify(highScores));
		displayLeaderboard();

	}
				
	function displayLeaderboard() {
        leaderboardList.innerHTML = "";
        highScores[gameSetting].forEach((entry, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${index + 1}. ${entry.name}: ` + '<span class="score">'+`${entry.score}</span>`;
            if (index === 0) li.style.fontWeight = "bold"; // Highlight top score
            leaderboardList.appendChild(li);
        });
    }

    // Buttons
    tryAgainButton.addEventListener("click", () => {
		stopFireworks();
        clickSound.play();
		score = 0;
		questionCount = 0;
		endGameScreen.classList.add("hidden");
        leaderboard.classList.add("hidden");
        startGame(gameSetting);
    });

    chooseModeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            clickSound.play();
			stopFireworks();
			score = 0;
			questionCount = 0;
			endGameScreen.classList.add("hidden");
			leaderboard.classList.add("hidden");
			difficultySelection.classList.add("hidden");
			modeSelection.classList.remove("hidden");
        });
    });

	quitGameButton.addEventListener("click", () => {
		stopFireworks();
        clickSound.play();
		score = 0;
		questionCount = 0;
		playerNameInput.value = "";
        sessionStorage.removeItem("playerName");
        sessionStorage.removeItem("correctAnswer");
		endGameScreen.classList.add("hidden");
        leaderboard.classList.add("hidden");
        nameInputScreen.classList.remove("hidden");
		playerNameInput.focus();
    });
	
	function triggerFireworks() {
		fireworks.classList.remove("hidden");
        fireworksSound.play();
		// Particle constructor
		function Particle(x, y, color) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.size = Math.random() * 10 + 5; // Particle size
			this.velocityX = Math.random() * 10 - 5; // Horizontal velocity
			this.velocityY = Math.random() * 10 - 5; // Vertical velocity
			this.lifespan = 100; // Particle lifespan
			this.element = document.createElement('div'); // Create a div for the particle
            this.element.classList.add("particle");

			// Style the particle
			this.element.style.position = 'absolute';
			this.element.style.width = this.size + 'px';
			this.element.style.height = this.size + 'px';
			this.element.style.backgroundColor = this.color;
			this.element.style.borderRadius = '50%';
			this.element.style.left = x + 'px';
			this.element.style.top = y + 'px';
			document.body.appendChild(this.element);
		}

		// Update and render particle
		Particle.prototype.update = function () {
			this.x += this.velocityX;
			this.y += this.velocityY;
			this.velocityY += 0.1; // Simulate gravity
			this.lifespan -= 1;

			// Update position and opacity
			this.element.style.left = this.x + 'px';
			this.element.style.top = this.y + 'px';
			this.element.style.opacity = this.lifespan / 100;

			// Remove particle when lifespan ends
			if (this.lifespan <= 0) {
				this.element.remove();
			}
		};

		// Create fireworks at given coordinates
		function createFirework(x, y) {
				for (let i = 0; i < 50; i++) {
					const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
					const particle = new Particle(x, y, color);
					particles.push(particle);
				}
			}

		// Animation loop
		const particles = [];
		function animate() {
			particles.forEach((p, index) => {
				p.update();
				if (p.lifespan <= 0) {
					particles.splice(index, 1); // Remove expired particles
				}
			});
			requestAnimationFrame(animate);
		}

		// Automate fireworks
		// Function to create a firework at a random position
		function createRandomFirework() {
			const x = Math.random() * window.innerWidth; // Random x-coordinate
			const y = Math.random() * window.innerHeight / 2; // Random y-coordinate (upper half of canvas)
			createFirework(x, y);
		}

		// Automate fireworks every 1 second
		setInterval(createRandomFirework, 500); // Adjust the interval (1000ms = 1 second) as needed
		animate();
	}

	function stopFireworks() {
        fireworksSound.pause();
        fireworksSound.currentTime = 0;
		// Stop the interval that creates random fireworks
		const highestIntervalId = window.setInterval(() => {}, 0); // Get the highest interval ID
		for (let i = 0; i <= highestIntervalId; i++) {
			window.clearInterval(i); // Clear all intervals
		}

		// Cancel the animation frame loop
		const highestAnimationFrameId = window.requestAnimationFrame(() => {});
		for (let i = 0; i <= highestAnimationFrameId; i++) {
			window.cancelAnimationFrame(i); // Cancel all animation frames
		}

		// Optionally, remove all remaining particles from the DOM
		const particles = document.querySelectorAll('.particle');
		particles.forEach(particle => particle.remove());
	}

});
