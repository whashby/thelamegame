document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements: Standard Game 
    const answerInput = document.getElementById("answerInput");
    const chooseModeButtons = document.querySelectorAll(".chooseModeBtn");
    const difficultyButtons = document.querySelectorAll(".difficultyBtn");
    const difficultySelection = document.getElementById("difficultySelection");
    const endGameScreen = document.getElementById("endGameScreen");
    const fireworks = document.getElementById("fireworks");
    const highScoreMessage = document.getElementById("highScoreMessage");
    const leaderboard = document.getElementById("leaderboard");
    const leaderboardList = document.getElementById("leaderboardList");
    const modeButtons = document.querySelectorAll(".modeBtn");
    const modeSelection = document.getElementById("modeSelection");
    const multiplierBonus = document.getElementById("multiplierBonus");
    const nameInputScreen = document.getElementById("nameInputScreen");
    const playerNameInput = document.getElementById("playerName");
    const playerScore = document.getElementById("playerScore");
    const questionArea = document.getElementById("questionArea");
    const quitGameButton = document.getElementById("quitGameBtn");
    const startGameButton = document.getElementById("startGameBtn");
    const standardGameScreen = document.getElementById("standardGameScreen");
    const submitAnswerButton = document.getElementById("submitAnswerBtn");
    const timeBonus = document.getElementById("timeBonus");
    const timerElement = document.getElementById("timer");
    const totalScore = document.getElementById("totalScore")
    const tryAgainButton = document.getElementById("tryAgainBtn");
    const welcomeMessage = document.getElementById("welcomeMessage");

    // DOM Elements: Story Mode
    const escapeButton = document.getElementById("escapeBtn");
    const feedback = document.getElementById("feedback");
    const levelTitle = document.getElementById("levelTitle");
    const levelDescription = document.getElementById("levelDescription");
    const nextLevelButton = document.getElementById("nextLevelBtn");
    const questionElement = document.getElementById("question");
    const submitButton = document.getElementById("submitBtn");
    const storyGameScreen = document.getElementById("storyGameScreen");
    const storyModeScreen = document.getElementById("storyModeScreen");
    const playerAnswer = document.getElementById("playerAnswer");
    

    // Game sounds
    const buzzerSound = new Audio("sounds/buzzer.mp3");
    const clickSound = new Audio("sounds/click.mp3");
    const correctSound = new Audio("sounds/correct.mp3");
    const fireworksSound = new Audio("sounds/fireworks.mp3");
    const tickSound = new Audio("sounds/tick.mp3");
    const wrongSound = new Audio("sounds/wrong.mp3");

    // Set initial volume and playback time
    fireworksSound.volume = 0.3;
    tickSound.currentTime = 1;
   
    // Game state variables 
    let currentMode;
    let currentQuestion;
    let gameSetting;
    let playerName;
    let timer;

    let currentLevel = 1;
    let currentDifficulty = 0; // Track difficulty (0: easy, 1: medium, 2: hard)
    let finalScore = 0;
    let score = 0;
    let scoreMultiplier = 1;
    let questionCount = 0;
    let range = 10;
    let timeScore = 0;
    let version = 1 + localStorage.getItem("version") || 1;

    const levels = {
        1: {
            title: "Level 1: Prime Decryption",
            description: "Decode the primes hidden in the sequence to proceed.",
            generateQuestion: (difficulty) => {
                const ranges = [
                    generateRandomSequence(1, 20, 6), // Easy range
                    generateRandomSequence(1, 50, 10), // Medium range
                    generateRandomSequence(1, 100, 15) // Hard range
                ];
                const sequence = ranges[difficulty];
                const primes = getPrimes(sequence);
                const question = `Which numbers in this sequence are primes? Sequence: ${sequence.join(", ")}`;
                return { question, answer: primes };
            }
        },
        2: {
            title: "Level 2: The Spatial Challenge",
            description: "Arrange the holographic cubes into the perfect pyramid using stability logic.",
            generateQuestion: (difficulty) => {
                const setups = [
                    [
                        { name: "Light Cube", weight: 3 },
                        { name: "Medium Cube", weight: 6 },
                        { name: "Heavy Cube", weight: 9 }
                    ], // Easy
                    [
                        { name: "Feather Cube", weight: 2 },
                        { name: "Stone Cube", weight: 10 },
                        { name: "Iron Cube", weight: 7 }
                    ], // Medium
                    [
                        { name: "Paper Cube", weight: 1 },
                        { name: "Brick Cube", weight: 14 },
                        { name: "Metal Cube", weight: 8 },
                        { name: "Steel Cube", weight: 18 }
                    ] // Hard
                ];
                const cubes = setups[difficulty];
                const question = `Arrange the cubes into a pyramid using the following properties:\n` +
                    cubes.map(cube => `${cube.name} (Weight: ${cube.weight})`).join("\n") +
                    `\nWhich cube should be placed at the base to ensure stability?`;
                const correctAnswer = cubes.find(cube => cube.weight === Math.max(...cubes.map(c => c.weight))).name;
                return { question, answer: correctAnswer };
            }
        },
        3: {
            title: "Level 3: The Neural Patterns",
            description: "Untangle the patterns in the neural network.",
            generateQuestion: (difficulty) => {
                const difficulties = [
                    generateDynamicSequence(5), // Easy sequence
                    generateArithmeticSequence(10), // Medium sequence
                    generateGeometricSequence(15) // Hard sequence
                ];
                const sequence = difficulties[difficulty];
                const question = `Identify the pattern and predict the next number in the sequence: ${sequence.values.join(", ")}`;
                return { question, answer: sequence.nextValue };
            }
        }
    };


    let gameOperations = ["Addition", "Subtraction", "Multiplication", "Division"]; //used later on in lazy logic just to reduce code to differentiate between standard and story modes. :D
    let highScores = JSON.parse(localStorage.getItem("highScores")) || {};

     // Generate Next Game Question
    const generateQuestion = (gameSetting) => {
        resetSounds();

        questionCount++;
        answerInput.value = "";
        answerInput.focus();

        let range = 10;
        if (gameSetting.includes("Guru")) {
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

        if (currentMode === "Subtraction") {

            while (num1 < num2) {
                num1 = Math.floor(Math.random() * range) + 2;
                num2 = Math.floor(Math.random() * range) + 2;
            }
        }

        if (currentMode === "Division") {

            while (num1 % num2 != 0 || num1 == num2 || num1 < num2) {
                num1 = Math.floor(Math.random() * range) + 2;
                num2 = Math.floor(Math.random() * range) + 2;
            }
        }

        const correctAnswer = eval(`${num1} ${operator} ${num2}`);

        questionArea.innerText = `${num1} ${operator} ${num2}`;
        sessionStorage.setItem("correctAnswer", correctAnswer);

    };

    /*-- Story Mode --*/

    //  Check Answer
    const checkAnswer = () => {
        const userInput = playerAnswer.value.trim();
        const correctAnswer = currentQuestion.answer;

        if (correctAnswer.length === 0 && playerAnswer.value.toLowerCase().trim() === "no primes in the sequence") {
            feedback.textContent = "Correct! There are no primes in this sequence.";
            nextLevelButton.style.display = "block";
        } else if (Array.isArray(correctAnswer)) {
            const userNumbers = userInput.split(",").map(num => parseInt(num.trim()));
            if (
                JSON.stringify(userNumbers.sort((a, b) => a - b)) ===
                JSON.stringify(correctAnswer.sort((a, b) => a - b))
            ) {
                feedback.textContent = currentDifficulty === 0? "Correct! Well done.":'';
                nextLevelButton.style.display = "block";
            } else {
                feedback.textContent = "Incorrect. Try again.";
            }
        } else if (typeof correctAnswer === "number") {
            if (parseInt(userInput) === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                nextLevelButton.style.display = "block";
            } else {
                feedback.textContent = "Incorrect. Try again.";
            }
        } else if (typeof correctAnswer === "string") {
            if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
                feedback.textContent = "Correct! Well done.";
                nextLevelButton.style.display = "block";
            } else {
                feedback.textContent = "Incorrect. Try again.";
            }
        }
    };



    // Generate Arithmetic Sequence
    const generateArithmeticSequence = (length) => {
        const sequence = [];
        const firstNumber = Math.floor(Math.random() * 10) + 1;
        const difference = Math.floor(Math.random() * 10) + 1;
        let current = firstNumber;

        for (let i = 0; i < length; i++) {
            sequence.push(current);
            current += difference;
        }

        const nextValue = current;
        return { values: sequence, nextValue };
    };

    // Generate Dynamic Sequence
    const generateDynamicSequence = (length) => {
        let sequence = [];
        let current = Math.floor(Math.random() * 10) + 1;
        let difference = Math.floor(Math.random() * 5) + 1;
        const increment = Math.floor(Math.random() * 5) + 1;

        for (let i = 0; i < length; i++) {
            sequence.push(current);
            if (i % 2 === 0) current += difference;
            else current -= difference;
            difference += increment;
        }

        const nextValue = (length % 2 === 0) ? current + difference : current - difference;
        return { values: sequence, nextValue };
    };

    // Generate Geometric Sequence
    const generateGeometricSequence = (length) => {
        const sequence = [];
        const firstNumber = Math.floor(Math.random() * 5) + 1;
        const multiplier = Math.floor(Math.random() * 5) + 2;
        let current = firstNumber;

        for (let i = 0; i < length; i++) {
            sequence.push(current);
            current *= multiplier;
        }

        const nextValue = current;
        return { values: sequence, nextValue };
    };

    // Generate Random Sequence
    const generateRandomSequence = (min, max, length) => {
        const sequence = new Set();
        while (sequence.size < length) {
            const num = Math.floor(Math.random() * (max - min + 1)) + min;
            sequence.add(num);
        }
        return Array.from(sequence);
    };

    // Get Prime Numbers from Sequence
    const getPrimes = (sequence) => {
        return sequence.filter((num) => {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        });
    };

    // Load Next Level
    const loadLevel = () => {
        const level = levels[currentLevel];
        const { title, description, generateQuestion } = level;

        levelTitle.textContent = `${title} - ${["Easy", "Medium", "Hard"][currentDifficulty]}`;
        levelDescription.textContent = description;

        currentQuestion = generateQuestion(currentDifficulty);
        questionElement.textContent = currentQuestion.question;
        feedback.textContent = "";
        playerAnswer.value = "";
        nextLevelButton.style.display = "none";
    };


 

   /*-- Standard Game Mode --*/

	// Check Highscore
    const checkHighScore = () => {
        if (highScores[gameSetting]) {
            const gameHighScores = highScores[gameSetting];
            const highestScore = gameHighScores[0].score;

            if (score > highestScore) {
                highScoreMessage.classList.remove("hidden");
                triggerFireworks();
            }
        } else {
            if (score > 0) {
                highScoreMessage.classList.remove("hidden");
                triggerFireworks();
            }
        }
    };

    // Display Leaderboard
    const displayLeaderboard = () => {
        leaderboardList.innerHTML = "";
        highScores[gameSetting].forEach((entry, index) => {
            const li = document.createElement("li");
            li.innerHTML = `${index + 1}. ${entry.name}: ` + '<span class="score">' + `${entry.score}</span>`;
            if (entry.name === playerName) li.style.fontWeight = "bold"; // Highlight top score
            leaderboardList.appendChild(li);
        });
    };

    // End Game
    const endGame = () => {
		stopTimer();
        resetSounds();

        finalScore = (score * scoreMultiplier) + timeScore;
       
        standardGameScreen.classList.add("hidden");
        endGameScreen.classList.remove("hidden");
        playerScore.innerHTML = score;
        multiplierBonus.innerText = scoreMultiplier;
        timeBonus.innerText = timeScore;
        totalScore.innerText = finalScore;
        leaderboard.classList.remove("hidden");



        updateHighScores(finalScore, playerName, gameSetting);
        checkHighScore();
        updateLeaderboard();
    };
	
     // Stop All Audio Playback
    const resetSounds = () => {
        if (buzzerSound.currentTime > 0) {
            buzzerSound.pause();
            buzzerSound.currentTime = 0;
        }

        if (wrongSound.currentTime > 0) {
            wrongSound.pause();
            wrongSound.currentTime = 0;
        }

        if (correctSound.currentTime > 0) {
            correctSound.pause();
            correctSound.currentTime = 0;
        }

        if (tickSound.currentTime > 0) {
            tickSound.pause();
            tickSound.currentTime = 0;
        }
    };

    // Start Game
    const startGame = (gameSetting) => {
        standardGameScreen.classList.remove("hidden");
        generateQuestion(gameSetting);
        startTimer();
    };

    // Init Timer
    const startTimer = () => {
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
    };

   // Stop Fireworks Animation
    const stopFireworks = () => {
        if (fireworksSound.currentTime > 0) {
            fireworksSound.pause();
            fireworksSound.currentTime = 0;
        }
        
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
    };
    
    // Stop Timer
    const stopTimer = () => {
        if (timer) {
            tickSound.pause();
            tickSound.currentTime = 1;
            clearInterval(timer);
            timer = null; // Reset the timer variable
        }
    };

   // Start Fireworks Animation
	const triggerFireworks = () => {
		fireworks.classList.remove("hidden");
        fireworksSound.play();

		// Particle constructor
		function Particle(x, y, color) {
			this.x = x;
			this.y = y;
			this.color = color;
			this.lifespan = 100; // Particle lifespan
			this.size = Math.random() * 10 + 5; // Particle size
			this.velocityX = Math.random() * 10 - 5; // Horizontal velocity
			this.velocityY = Math.random() * 10 - 5; // Vertical velocity

			this.element = document.createElement('div'); // Create a div for the particle
            this.element.classList.add("particle");

			// Style the particle
			this.element.style.backgroundColor = this.color;
			this.element.style.borderRadius = '50%';
			this.element.style.height = this.size + 'px';
			this.element.style.left = x + 'px';
			this.element.style.position = 'absolute';
			this.element.style.top = y + 'px';
			this.element.style.width = this.size + 'px';

			document.body.appendChild(this.element);
		}

		// Update and render particle
		Particle.prototype.update = function () {
			this.x += this.velocityX;
			this.y += this.velocityY;
			this.lifespan -= 1;
			this.velocityY += 0.1; // Simulate gravity

			// Update position and opacity
			this.element.style.left = this.x + 'px';
			this.element.style.opacity = this.lifespan / 100;
            this.element.style.top = this.y + 'px';

			// Remove particle when lifespan ends
			if (this.lifespan <= 0) {
				this.element.remove();
			}
		};

		// Create fireworks at given coordinates
		const createFirework = (x, y) => {
			for (let i = 0; i < 50; i++) {
				const color = 'rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})';
				const particle = new Particle(x, y, color);
				particles.push(particle);
			}
		};

		// Animation loop
		const particles = [];

        const animate = () => {
            particles.forEach((p, index) => {
                p.update();
                if (p.lifespan <= 0) {
                    particles.splice(index, 1); // Remove expired particles
                }
            });

            requestAnimationFrame(animate);
        };

		// Automate fireworks
		// Function to create a firework at a random position
        const createRandomFirework = () => {
            const x = Math.random() * window.innerWidth; // Random x-coordinate
            const y = Math.random() * window.innerHeight / 2; // Random y-coordinate (upper half of canvas)

            createFirework(x, y);
        };

		// Automate fireworks every 1 second
		setInterval(createRandomFirework, 500); // Adjust the interval (1000ms = 1 second) as needed
		animate();
    };

    // Open or create openHighScoresDB database
    const updateHighScores = (score, playerName, gameSetting) => {
        if (!gameSetting || !playerName) {
            console.error("Invalid gameSetting or playerName.");
            return;
        }

        const request = indexedDB.open('highScores', version);

        request.onerror = function (event) {
            console.error('Database error:', event.target.error);
        }

        request.onupgradeneeded = function (event) {
            console.log("Upgrading database:", event.target.result);
            console.log("Version:", version);
            console.log("Game Setting:", gameSetting);


            let db = event.target.result;
            // Create an object store for high scores if it doesn't exist
            if (!db.objectStoreNames.contains(gameSetting)) {
                const objectStore = db.createObjectStore(gameSetting, { keyPath: 'playerName' });
                objectStore.createIndex('playerName', 'playerName', { unique: true });
                version++;
            }
        }

        request.onsuccess = function (event) {

            console.log("Database opened successfully:", event.target.result);

            version = 1 + event.target.result.version;

            // Open the database and transaction
            let db = event.target.result;
            const transaction = db.transaction(gameSetting, 'readwrite');
            const objectStore = transaction.objectStore(gameSetting);

            const getRequest = objectStore.get(playerName);


            getRequest.onsuccess = function () {
                const existingHighScore = getRequest.result;
                if (existingHighScore) {

                    console.log("Updating record:", existingHighScore);

                    // Update the score if the new score is higher
                    if (score > existingHighScore.score) {
                        existingHighScore.score = score;
                    }

                    const updateRequest = objectStore.put(existingHighScore);

                    updateRequest.onsuccess = function () {
                        console.log("Record updated successfully:", existingHighScore);
                    };

                    updateRequest.onerror = function (event) {
                        console.error('Error updating record:', event.target.error);
                    };

                } else {

                    // Add a new record if it doesn't exist
                    console.log("Adding Record:", playerName);
                    const newHighScore = { playerName: playerName, score: score };
                    const addRequest = objectStore.add(newHighScore);

                    addRequest.onsuccess = function () {
                        console.log("Record added successfully:", newHighScore);
                    };

                    // Handle error for adding record
                    addRequest.onerror = function (event) {
                        console.error('Error adding record:', event.target.error);
                    };
                }

            };


            getRequest.onerror = function (event) {
                console.error('Error retrieving record:', event.target.error);
            };
        };

    };

    // Update Leaderboard
    const updateLeaderboard = () => {
        // Initialize if no high scores exist for the mode
        if (!highScores[gameSetting]) {
            highScores[gameSetting] = [];
        }

        const modeScores = highScores[gameSetting];
        const playerIndex = modeScores.findIndex(entry => entry.name === playerName);


        if (playerIndex !== -1) {
            if (finalScore > modeScores[playerIndex].score) {
                modeScores[playerIndex].score = finalScore;
            }
        } else {
            modeScores.push({ name: playerName, score: finalScore });
        }

        modeScores.sort((a, b) => b.score - a.score);
        highScores[gameSetting] = modeScores.slice(0, 10);
        localStorage.setItem("highScores", JSON.stringify(highScores));
        displayLeaderboard();

    };
				
    // Stop Fireworks Audio at End of Playback
    fireworksSound.addEventListener("ended",() => {
        stopFireworks();
    });

    /*-- Event Listeners for Buttons --*/

    // Mode Selection
    chooseModeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            clickSound.play();
			stopFireworks();
			score = 0;
			questionCount = 0;
			endGameScreen.classList.add("hidden");
			leaderboard.classList.add("hidden");
            highScoreMessage.classList.add("hidden");
			difficultySelection.classList.add("hidden");
			modeSelection.classList.remove("hidden");
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
	
    // continue Story Mode
    escapeButton.addEventListener("click", () => {
        clickSound.play();

        storyModeScreen.classList.add("hidden");
        storyGameScreen.classList.remove("hidden");
        loadLevel();
    });

    // Select Game Mode
    modeButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            clickSound.play();
            currentMode = e.target.dataset.operation;

            if (gameOperations.includes(currentMode)) {
                modeSelection.classList.add("hidden");
                difficultySelection.classList.remove("hidden");
                return;
            }

            document.getElementById("player").innerText = playerName;

            modeSelection.classList.add("hidden");
            storyModeScreen.classList.remove("hidden");
       });
    });

    // Go to Next Level
    nextLevelButton.addEventListener("click", () => {
        currentDifficulty++;
        if (currentDifficulty > 2) {
            currentDifficulty = 0; // Reset difficulty
            currentLevel++; // Move to next level
        }

        if (currentLevel <= Object.keys(levels).length) {
            loadLevel();
        } else {
            levelTitle.textContent = "Congratulations!";
            levelDescription.textContent = "You have completed Neural Nexus: The Mind Maze.";
            questionElement.textContent = "";
            playerAnswer.style.display = "none";
            submitButton.style.display = "none";
            nextLevelButton.style.display = "none";
        }
    });
   // Quit Game
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
        highScoreMessage.classList.add("hidden");
        nameInputScreen.classList.remove("hidden");
		playerNameInput.focus();
    });

    // Start Game
    startGameButton.addEventListener("click", () => {
		clickSound.play();
        playerName = playerNameInput.value.trim();
        
        if (!playerName || !isNaN(playerName)) {
            alert("Please enter a valid name.");
            playerNameInput.focus();
            return;
        }

        const request = indexedDB.open('users', 1);

        request.onerror = function (event) {
            console.error('Database error:', event.target.error);
        }

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore('users', { keyPath: 'playerName' });
            objectStore.createIndex('name', 'playerName', { unique: true });
        }

        request.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction('users', 'readwrite');
            const objectStore = transaction.objectStore('users');

            const getRequest = objectStore.get(playerName);
            getRequest.onsuccess = function (event) {
                if (getRequest.result) {
                    console.log("User already exists:", event.target.result);
                    welcomeMessage.innerText = `Welcome back, ${playerName}!`;
                } else {
                    console.log("User does not exist, adding:", playerName);
                    welcomeMessage.innerText = `Welcome, ${playerName}!`;
                    const user = { playerName: playerName };
                    objectStore.add(user);
                }

                sessionStorage.setItem("playerName", playerName);
                welcomeMessage.classList.remove("hidden");
            };

            getRequest.onerror = function (event) {
                console.error('Error retrieving user:', event.target.error);
            };
        };


        nameInputScreen.classList.add("hidden");
        modeSelection.classList.remove("hidden");
    });

    // Validate Answer
    submitAnswerButton.addEventListener("click", () => {
        const playerAnswer = parseFloat(answerInput.value);
		const correctAnswer = sessionStorage.getItem("correctAnswer");

		stopTimer();
        resetSounds(); //added as test but doesn't affect function
		
        if (playerAnswer == correctAnswer) {
			correctSound.play();
            score += 1;
            timeScore += parseInt(timerElement.innerText);

            if(questionCount == 10 && currentDifficulty == "Classic") {
				endGame();
			} else {
				generateQuestion(gameSetting);
				startTimer();
			}
		} else {
            tickSound.pause();
            tickSound.currentTime = 0;
			wrongSound.play();
            resetSounds();

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

    submitButton.addEventListener("click", checkAnswer);

    // Try Again
    tryAgainButton.addEventListener("click", () => {
		stopFireworks();
        clickSound.play();
		score = 0;
		questionCount = 0;
		endGameScreen.classList.add("hidden");
        leaderboard.classList.add("hidden");
        highScoreMessage.classList.add("hidden");
        startGame(gameSetting);
    });










    /*
    const fs = require("fs");

    const writeToFile = (filePath, data) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("File written successfully!");
            }
        });
    };

    // Example: Writing to "example.txt"
    const data = "This is the data to be written to the file.";
    writeToFile("example.txt", data);

    */
});
