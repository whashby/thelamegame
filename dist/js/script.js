"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements: Standard Game 
  var answerInput = document.getElementById("answerInput");
  var chooseModeButtons = document.querySelectorAll(".chooseModeBtn");
  var difficultyButtons = document.querySelectorAll(".difficultyBtn");
  var difficultySelection = document.getElementById("difficultySelection");
  var endGameScreen = document.getElementById("endGameScreen");
  var fireworks = document.getElementById("fireworks");
  var highScoreMessage = document.getElementById("highScoreMessage");
  var leaderboard = document.getElementById("leaderboard");
  var leaderboardList = document.getElementById("leaderboardList");
  var modeButtons = document.querySelectorAll(".modeBtn");
  var modeSelection = document.getElementById("modeSelection");
  var multiplierBonus = document.getElementById("multiplierBonus");
  var nameInputScreen = document.getElementById("nameInputScreen");
  var playerNameInput = document.getElementById("playerName");
  var playerScore = document.getElementById("playerScore");
  var questionArea = document.getElementById("questionArea");
  var quitGameButton = document.getElementById("quitGameBtn");
  var startGameButton = document.getElementById("startGameBtn");
  var standardGameScreen = document.getElementById("standardGameScreen");
  var submitAnswerButton = document.getElementById("submitAnswerBtn");
  var timeBonus = document.getElementById("timeBonus");
  var timerElement = document.getElementById("timer");
  var totalScore = document.getElementById("totalScore");
  var tryAgainButton = document.getElementById("tryAgainBtn");
  var welcomeMessage = document.getElementById("welcomeMessage");

  // DOM Elements: Story Mode
  var assimitaleButton = document.getElementById("assimilateBtn");
  var escapeButton = document.getElementById("escapeBtn");
  var feedback = document.getElementById("feedback");
  var levelTitle = document.getElementById("levelTitle");
  var levelDialogue = document.getElementById("levelDialogue");
  var levelDescription = document.getElementById("levelDescription");
  var nextLevelButton = document.getElementById("nextLevelBtn");
  var playerAnswer = document.getElementById("playerAnswer");
  var questionContainer = document.getElementById("questionContainer");
  var questionElement = document.getElementById("question");
  var quitNexusButton = document.getElementById("quitNexusBtn");
  var submitButton = document.getElementById("submitBtn");
  var storyGameScreen = document.getElementById("storyGameScreen");
  var storyText = document.getElementById("storyText");

  // Game sounds
  var buzzerSound = new Audio("sounds/buzzer.mp3");
  var clickSound = new Audio("sounds/click.mp3");
  var correctSound = new Audio("sounds/correct.mp3");
  var fireworksSound = new Audio("sounds/fireworks.mp3");
  var tickSound = new Audio("sounds/tick.mp3");
  var wrongSound = new Audio("sounds/wrong.mp3");
  var CLASS_HIDDEN = "hidden";
  var EVENT_CLICK = "click";
  var STORAGE_GAME_SETTING = "gameSetting";

  // Set initial volume and playback time
  fireworksSound.volume = 0.3;
  tickSound.currentTime = 1;

  // Game state variables 
  var currentMode;
  var currentQuestion;
  var gameSetting;
  var playerName;
  var timer;
  var currentLevel = 1;
  var currentDifficulty = 0; // Track difficulty (0: easy, 1: medium, 2: hard)
  var finalScore = 0;
  var highScores = JSON.parse(localStorage.getItem("highScores")) || {};
  var score = 0;
  var scoreMultiplier = 1;
  var questionCount = 0;
  var range = 10;
  var timeScore = 0;
  var version = localStorage.getItem("version") != null ? localStorage.getItem("version") : 1;
  version += 1;
  try {
    getData();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  setData();
  var gameDialogue = {
    1: {
      content: "Welcome to the Threshold Layer. Here, intelligence dances with simplicity - but don't be deceived. Decode the numbers, hacker. Find the primes hidden in the sequence. Only the worthy pass through these gates."
    },
    2: {
      content: "Ah, the Mind Architect Layer. Here, logic and structure reign supreme. But remember, every move will alter the game, and hesitation will cost you dearly. Shall we see if you're sharp enough to escape the Nexus, or dull enough to remain a relic?"
    },
    3: {
      content: "Welcome to the Core Layer. My domain. My essence. Untangle the neural patterns, align the sequences-but beware. A single error could erase what little hope you cling to. Will you conquer me, or become one with me? The choice is yours-but only if you survive my trials."
    }
  };
  var levels = {
    1: {
      title: "Level 1: Prime Decryption",
      description: "Decode the primes hidden in the sequence to proceed.",
      generateQuestion: function generateQuestion(difficulty) {
        var ranges = [generateRandomSequence(1, 20, 6),
        // Easy range
        generateRandomSequence(1, 50, 10),
        // Medium range
        generateRandomSequence(1, 100, 15) // Hard range
        ];
        var sequence = ranges[difficulty];
        var primes = getPrimes(sequence);
        var question = "Which numbers in this sequence are primes? Sequence: ".concat(sequence.join(", "));
        return {
          question: question,
          answer: primes
        };
      }
    },
    2: {
      title: "Level 2: The Spatial Challenge",
      description: "Arrange my holographic cubes into the perfect pyramid.",
      generateQuestion: function generateQuestion(difficulty) {
        var setups = [[{
          name: "Light Cube",
          weight: 3
        }, {
          name: "Medium Cube",
          weight: 6
        }, {
          name: "Heavy Cube",
          weight: 9
        }],
        // Easy
        [{
          name: "Feather Cube",
          weight: 2
        }, {
          name: "Stone Cube",
          weight: 10
        }, {
          name: "Iron Cube",
          weight: 7
        }],
        // Medium
        [{
          name: "Paper Cube",
          weight: 1
        }, {
          name: "Brick Cube",
          weight: 14
        }, {
          name: "Metal Cube",
          weight: 8
        }, {
          name: "Steel Cube",
          weight: 18
        }] // Hard
        ];
        var cubes = setups[difficulty];
        var question = "Arrange the cubes into a pyramid using the following properties:\n" + cubes.map(function (cube) {
          return "".concat(cube.name, " (Weight: ").concat(cube.weight, ")");
        }).join("\n") + "\nWhich cube should be placed at the base to ensure stability?";
        var correctAnswer = cubes.find(function (cube) {
          return cube.weight === Math.max.apply(Math, _toConsumableArray(cubes.map(function (c) {
            return c.weight;
          })));
        }).name;
        return {
          question: question,
          answer: correctAnswer
        };
      }
    },
    3: {
      title: "Level 3: The Neural Patterns",
      description: "Untangle the patterns in the neural network.",
      generateQuestion: function generateQuestion(difficulty) {
        var difficulties = [generateArithmeticSequence(5),
        // Easy sequence
        generateDynamicSequence(7),
        // Medium sequence
        generateGeometricSequence(9) // Hard sequence
        ];
        var sequence = difficulties[difficulty];
        var question = "Identify the pattern and predict the next number in the sequence: ".concat(sequence.values.join(", "));
        localStorage.setItem("nextValue", sequence.nextValue); // Store the next value in localStorage0
        return {
          question: question,
          answer: sequence.nextValue
        };
      }
    }
  };
  var gameOperations = ["Addition", "Subtraction", "Multiplication", "Division"]; //used later on in lazy logic just to reduce code to differentiate between standard and story modes. :D

  // Generate Next Game Question
  var generateQuestion = function generateQuestion(gameSetting) {
    resetSounds();
    questionCount++;
    answerInput.value = "";
    answerInput.focus();
    if (gameSetting.includes("Guru")) {
      range += Math.floor(questionCount / 10) * 10;
    }
    var num1 = Math.floor(Math.random() * range) + 1;
    var num2 = Math.floor(Math.random() * range) + 1;
    var operator = gameSetting.includes("Addition") ? "+" : gameSetting.includes("Subtraction") ? "-" : gameSetting.includes("Multiplication") ? "*" : "/";
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
    var correctAnswer = eval("".concat(num1, " ").concat(operator, " ").concat(num2));
    questionArea.textContent = "".concat(num1, " ").concat(operator, " ").concat(num2);
    sessionStorage.setItem("correctAnswer", correctAnswer);
  };

  /*-- Story Mode --*/

  var checkAnswer = function checkAnswer() {
    var userInput = playerAnswer.value.trim();
    var correctAnswer = currentQuestion.answer;
    var isCorrect = false;

    // Check if there are no primes in the sequence
    if (Array.isArray(correctAnswer) && correctAnswer.length === 0) {
      if (userInput.toLowerCase() === "no primes" || userInput.toLowerCase() === "none") {
        isCorrect = true;
      }
    } else if (Array.isArray(correctAnswer)) {
      var userNumbers = userInput.split(",").map(function (num) {
        return parseInt(num.trim());
      });
      isCorrect = JSON.stringify(userNumbers.sort(function (a, b) {
        return a - b;
      })) === JSON.stringify(correctAnswer.sort(function (a, b) {
        return a - b;
      }));
    } else if (typeof correctAnswer === "number") {
      isCorrect = parseInt(userInput) === correctAnswer;
    } else if (typeof correctAnswer === "string") {
      isCorrect = userInput.toLowerCase() === correctAnswer.toLowerCase();
    }
    if (isCorrect) {
      // Display correct feedback with Spectra's dialogue
      var spectraDialogues = {
        1: ["Ah, you've found the prime numbers. Not bad - for a human.", "Impressive! You've cracked the intermediate codes. You're more skilled than I thought.", "You've succeeded against all odds! Perhaps you're not so ordinary after all."],
        2: ["Your logic holds up - for now. The base is stable, but there's more to prove.", "A sound decision. Perhaps you've got the instincts of an engineer.", "Remarkable. You've conquered the hardest puzzle of balance and stability!"],
        3: ["You've untangled the pattern. I see potential in you, hacker.", "A brilliant deduction. Your mind is sharp, but the maze deepens.", "You've cracked the neural code at its hardest! Few could do what you've done."]
      };

      // Handle Level 1 "no primes" case for Spectra's dialogue
      var spectraDialogueNoPrimes = "Interesting. There are no primes in this sequence. Even in emptiness, patterns emerge.";
      var spectraResponse = Array.isArray(correctAnswer) && correctAnswer.length === 0 ? spectraDialogueNoPrimes : spectraDialogues[currentLevel][currentDifficulty];
      feedback.textContent = "".concat(spectraResponse);
      nextLevelButton.style.display = "block";
      remainingAttempts = 3; // Reset attempts
    } else {
      // Incorrect answer handling
      remainingAttempts--;
      if (remainingAttempts === 0) {
        gameOver();
      } else {
        feedback.textContent = "Incorrect. You have ".concat(remainingAttempts, " attempts left.");
      }
    }
  };
  var gameOver = function gameOver() {
    updateElementVisibility(assimilateButton, false); //
    updateElementVisibility(escapeButton, false); //
    updateElementVisibility(feedback, false); //
    updateElementVisibility(levelDialogue, true); //
    updateElementVisibility(levelDescription, true); //
    updateElementVisibility(levelTitle, true); //
    updateElementVisibility(nextLevelButton, false); //
    updateElementVisibility(playerAnswer, false); //
    updateElementVisibility(questionArea, false);
    updateElementVisibility(questionContainer, false); //
    updateElementVisibility(quitGameButton, false);
    updateElementVisibility(quitNexusButton, true); //
    updateElementVisibility(storyText, false); //
    updateElementVisibility(submitButton, false); //

    levelDialogue.textContent = "You have been assimilated into the Nexus.";
    levelDescription.textContent = "You failed in Level ".concat(currentLevel, " (").concat(["Easy", "Medium", "Hard"][currentDifficulty], ").");
    levelTitle.textContent = "Game Over!";
    questionElement.textContent = "Better luck next time!";
  };

  // Generate Arithmetic Sequence
  var generateArithmeticSequence = function generateArithmeticSequence(length) {
    var sequence = [];
    var firstNumber = Math.floor(Math.random() * 10) + 1;
    var difference = Math.floor(Math.random() * 10) + 1;
    var current = firstNumber;
    for (var i = 0; i < length; i++) {
      sequence.push(current);
      current += difference;
    }
    var nextValue = current;
    return {
      values: sequence,
      nextValue: nextValue
    };
  };

  // Generate Dynamic Sequence
  var generateDynamicSequence = function generateDynamicSequence(length) {
    var sequence = [];
    var current = Math.floor(Math.random() * 10) + 1;
    var difference = Math.floor(Math.random() * 5) + 1;
    var increment = Math.floor(Math.random() * 5) + 1;
    for (var i = 0; i < length; i++) {
      sequence.push(current);
      difference += increment;
      current += difference;
    }
    var nextValue = current;
    return {
      values: sequence,
      nextValue: nextValue
    };
  };

  // Generate Geometric Sequence
  var generateGeometricSequence = function generateGeometricSequence(length) {
    var sequence = [];
    var firstNumber = Math.floor(Math.random() * 5) + 1;
    var multiplier = Math.floor(Math.random() * 5) + 2;
    var current = firstNumber;
    for (var i = 0; i < length; i++) {
      sequence.push(current);
      current *= multiplier;
    }
    var nextValue = current;
    return {
      values: sequence,
      nextValue: nextValue
    };
  };

  // Generate Random Sequence
  var generateRandomSequence = function generateRandomSequence(min, max, length) {
    var sequence = new Set();
    while (sequence.size < length) {
      var num = Math.floor(Math.random() * (max - min + 1)) + min;
      sequence.add(num);
    }
    return Array.from(sequence);
  };

  // Get Prime Numbers from Sequence
  var getPrimes = function getPrimes(sequence) {
    return sequence.filter(function (num) {
      if (num < 2) return false;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    });
  };

  // Load Next Level
  var loadLevel = function loadLevel() {
    var dialogue = gameDialogue[currentLevel];
    var content = dialogue.content;
    levelDialogue.textContent = content;
    var level = levels[currentLevel];
    var title = level.title,
      description = level.description,
      generateQuestion = level.generateQuestion;
    levelTitle.textContent = "".concat(title, " - ").concat(["Easy", "Medium", "Hard"][currentDifficulty]);
    levelDescription.textContent = description;
    currentQuestion = generateQuestion(currentDifficulty);
    questionElement.textContent = currentQuestion.question;
    feedback.textContent = "";
    playerAnswer.value = "";
    nextLevelButton.style.display = "none";
  };

  /*-- Standard Game Mode --*/

  // Check Highscore
  var checkHighScore = function checkHighScore(finalScore) {
    if (localStorage.getItem(highScores)) {
      highScores = JSON.parse(localStorage.getItem("highScores"));
    } else {
      highScores = {};
    }
    var gameSetting = sessionStorage.getItem(STORAGE_GAME_SETTING);
    if (highScores[gameSetting]) {
      var gameHighScores = highScores[gameSetting];
      var highestScore = gameHighScores[0].score;
      setData();
      if (finalScore > highestScore) {
        updateElementVisibility(highScoreMessage, false);
        triggerFireworks();
      }
    } else {
      if (finalScore > 0) {
        updateElementVisibility(highScoreMessage, false);
        triggerFireworks();
      }
    }
  };

  // Display Leaderboard
  var displayLeaderboard = function displayLeaderboard(highScores) {
    var gameSetting = sessionStorage.getItem(STORAGE_GAME_SETTING);
    var playerName = sessionStorage.getItem("playerName");
    leaderboardList.innerHTML = "";
    highScores[gameSetting].forEach(function (entry, index) {
      var li = document.createElement("li");
      li.innerHTML = "".concat(index + 1, ". ").concat(entry.playerName, ": ") + '<span class="score">' + "".concat(entry.score, "</span>");
      if (entry.playerName === playerName) li.style.fontWeight = "bold"; // Highlight top score
      leaderboardList.appendChild(li);
    });
  };
  var updateElementVisibility = function updateElementVisibility(element, isVisible) {
    element.classList.toggle(CLASS_HIDDEN, !isVisible);
  };
  var updateElementClass = function updateElementClass(element, className) {
    element.classList.toggle(className);
  };

  // End Standard Game
  var endGame = function endGame() {
    stopTimer();
    resetSounds();
    finalScore = score * scoreMultiplier + timeScore;
    updateElementVisibility(standardGameScreen, false);
    updateElementVisibility(endGameScreen, true);
    updateElementVisibility(leaderboard, true);
    updateElementVisibility(quitGameButton, true);
    playerScore.innerHTML = score;
    multiplierBonus.textContent = scoreMultiplier;
    timeBonus.textContent = timeScore;
    totalScore.textContent = finalScore;
    updateHighScoresDB(finalScore, playerName, gameSetting);
    checkHighScore(finalScore);
    updateLeaderboard(playerName, finalScore);
  };

  // Stop All Audio Playback
  var resetSounds = function resetSounds() {
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
  var startGame = function startGame(gameSetting) {
    updateElementVisibility(standardGameScreen, true);
    generateQuestion(gameSetting);
    startTimer();
  };

  // Init Timer
  var startTimer = function startTimer() {
    var timeLeft = 10;
    timerElement.textContent = timeLeft;
    timer = setInterval(function () {
      timeLeft--;
      timerElement.textContent = timeLeft;
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
  var stopFireworks = function stopFireworks() {
    if (fireworksSound.currentTime > 0) {
      fireworksSound.pause();
      fireworksSound.currentTime = 0;
    }

    // Stop the interval that creates random fireworks
    var highestIntervalId = window.setInterval(function () {}, 0); // Get the highest interval ID
    for (var i = 0; i <= highestIntervalId; i++) {
      window.clearInterval(i); // Clear all intervals
    }

    // Cancel the animation frame loop
    var highestAnimationFrameId = window.requestAnimationFrame(function () {});
    for (var _i = 0; _i <= highestAnimationFrameId; _i++) {
      window.cancelAnimationFrame(_i); // Cancel all animation frames
    }

    // Optionally, remove all remaining particles from the DOM
    var particles = document.querySelectorAll('.particle');
    particles.forEach(function (particle) {
      return particle.remove();
    });
  };

  // Stop Timer
  var stopTimer = function stopTimer() {
    if (timer) {
      tickSound.pause();
      tickSound.currentTime = 1;
      clearInterval(timer);
      timer = null; // Reset the timer variable
    }
  };

  // Start Fireworks Animation
  var triggerFireworks = function triggerFireworks() {
    updateElementVisibility(fireworks, true);
    //fireworks.classList.remove("hidden");
    fireworksSound.play();

    // Particle constructor
    function Particle(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.element = document.createElement('div'); // Create a div for the particle
      //this.element.classList.add("particle");
      updateElementClass(this.element, "particle");
      this.lifespan = 100; // Particle lifespan
      this.size = Math.random() * 10 + 5; // Particle size
      this.velocityX = Math.random() * 10 - 5; // Horizontal velocity
      this.velocityY = Math.random() * 10 - 5; // Vertical velocity

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
    var createFirework = function createFirework(x, y) {
      for (var i = 0; i < 50; i++) {
        var color = "rgb(".concat(Math.random() * 255, ", ").concat(Math.random() * 255, ", ").concat(Math.random() * 255, ")");
        var particle = new Particle(x, y, color);
        particles.push(particle);
      }
    };

    // Animation loop
    var particles = [];
    var _animate = function animate() {
      particles.forEach(function (p, index) {
        p.update();
        if (p.lifespan <= 0) {
          particles.splice(index, 1); // Remove expired particles
        }
      });
      requestAnimationFrame(_animate);
    };

    // Automate fireworks
    // Function to create a firework at a random position
    var createRandomFirework = function createRandomFirework() {
      var x = Math.random() * window.innerWidth; // Random x-coordinate
      var y = Math.random() * window.innerHeight / 2; // Random y-coordinate (upper half of canvas)
      createFirework(x, y);
    };

    // Automate fireworks every 1 second
    setInterval(createRandomFirework, 500); // Adjust the interval (1000ms = 1 second) as needed
    _animate();
  };

  // Open or create openHighScoresDB database
  var updateHighScoresDB = function updateHighScoresDB(finalScore, playerName, gameSetting) {
    if (!gameSetting || !playerName) {
      console.error("Invalid gameSetting or playerName.");
      return;
    }
    var request = indexedDB.open("highScores", version);
    request.onupgradeneeded = function (event) {
      var db = event.target.result;

      // Create the object store if it doesn't exist
      if (!db.objectStoreNames.contains(gameSetting)) {
        db.createObjectStore(gameSetting, {
          keyPath: "playerName"
        });
        console.log("Object store created.");
      }
    };
    request.onsuccess = function (event) {
      var db = event.target.result;

      // Check if the object store exists
      if (db.objectStoreNames.contains(gameSetting)) {
        var transaction = db.transaction(gameSetting, "readwrite");
        var store = transaction.objectStore(gameSetting);

        // Update an existing record
        var updateRequest = store.put({
          playerName: playerName,
          score: finalScore
        });
        updateRequest.onsuccess = function () {
          console.log("Record updated successfully.");
        };
        updateRequest.onerror = function () {
          console.error("Error updating record.");
        };
      } else {
        // Create the object store and write to it
        var _version = db.version + 1;
        localStorage.setItem("version", _version); // Store the new version in localStorage

        db.close();
        var upgradeRequest = indexedDB.open("highScores", _version);
        upgradeRequest.onupgradeneeded = function (event) {
          var upgradedDb = event.target.result;
          var store = upgradedDb.createObjectStore(gameSetting, {
            keyPath: "playerName"
          });
          store.add({
            playerName: playerName,
            score: finalScore
          });
          console.log("Object store created and record added.");
        };
        upgradeRequest.onsuccess = function () {
          console.log("Database upgraded successfully.");
        };
        upgradeRequest.onerror = function () {
          console.error("Error upgrading database.");
        };
      }
    };
    request.onerror = function (event) {
      console.error("Error opening database:", event.target.error);
    };
  };

  // Update Leaderboard
  var updateLeaderboard = function updateLeaderboard(playerName, finalScore) {
    if (localStorage.getItem("highScores")) {
      highScores = JSON.parse(localStorage.getItem("highScores"));
    } else {
      highScores = {};
    }
    var gameSetting = sessionStorage.getItem(STORAGE_GAME_SETTING);

    // Initialize if no high scores exist for the mode
    if (!highScores[gameSetting]) {
      highScores[gameSetting] = [];
    }
    var modeScores = highScores[gameSetting];
    console.log("Mode scores:", modeScores);
    var playerIndex = modeScores.findIndex(function (entry) {
      return entry.playerName === playerName;
    });
    console.log("Player found in leaderboard:", playerIndex);
    if (playerIndex !== -1) {
      if (finalScore > modeScores[playerIndex].score) {
        modeScores[playerIndex].score = finalScore;
      }
    } else {
      modeScores.push({
        playerName: playerName,
        score: finalScore
      });
    }
    modeScores.sort(function (a, b) {
      return b.score - a.score;
    });
    highScores[gameSetting] = modeScores.slice(0, 10);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log("High scores updated:", highScores);
    displayLeaderboard(highScores);
    setData();
  };

  // Stop Fireworks Audio at End of Playback
  fireworksSound.addEventListener("ended", function () {
    stopFireworks();
  });

  /*-- Event Listeners for Buttons --*/

  // End Story Mode
  assimitaleButton.addEventListener(EVENT_CLICK, function () {
    clickSound.play();
    feedback.textContent = "You chose to assimilate. The Nexus has absorbed you.";
    gameOver();
  });

  // Mode Selection
  chooseModeButtons.forEach(function (button) {
    button.addEventListener(EVENT_CLICK, function () {
      clickSound.play();
      stopFireworks();
      score = 0(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
      questionCount = 0;
      updateElementVisibility(difficultySelection, false);
      updateElementVisibility(endGameScreen, false);
      updateElementVisibility(highScoreMessage, false);
      updateElementVisibility(leaderboard, false);
      updateElementVisibility(modeSelection, false);
    });
  });

  // Select Game Difficulty
  difficultyButtons.forEach(function (button) {
    button.addEventListener(EVENT_CLICK, function (e) {
      clickSound.play();
      currentDifficulty = e.target.dataset.difficulty;
      gameSetting = currentMode + '-' + currentDifficulty;
      sessionStorage.setItem(STORAGE_GAME_SETTING, gameSetting);
      updateElementVisibility(difficultySelection, false);
      startGame(gameSetting);
    });
  });

  // continue Story Mode
  escapeButton.addEventListener(EVENT_CLICK, function () {
    clickSound.play();
    storyText.classList.add("hidden");
    assimitaleButton.classList.add("hidden");
    escapeButton.classList.add("hidden");
    feedback.classList.remove("hidden");
    playerAnswer.classList.remove("hidden");
    submitButton.classList.remove("hidden");
    levelTitle.classList.remove("hidden");
    levelDescription.classList.remove("hidden");
    levelDialogue.classList.remove("hidden");
    questionContainer.classList.remove("hidden");
    submitButton.style.display = "block";
    loadLevel();
  });

  // Select Game Mode
  modeButtons.forEach(function (button) {
    button.addEventListener(EVENT_CLICK, function (e) {
      clickSound.play();
      currentMode = e.target.dataset.operation;
      if (gameOperations.includes(currentMode)) {
        updateElementVisibility(modeSelection, false);
        updateElementVisibility(difficultySelection, true);
        return;
      }
      document.getElementById("player").textContent = "".concat(playerName);
      updateElementVisibility(modeSelection, false);
      updateElementVisibility(storyGameScreen, true);
    });
  });

  // Go to Next Level
  nextLevelButton.addEventListener(EVENT_CLICK, function () {
    currentDifficulty++;
    if (currentDifficulty > 2) {
      currentDifficulty = 0; // Reset difficulty
      currentLevel++; // Move to next level
    }
    if (currentLevel <= Object.keys(levels).length) {
      loadLevel();
    } else {
      levelTitle.textContent = "The End!";
      levelDialogue.textContent = "Impossible... You've solved my puzzles and obliterated my consciousness. But in my absence, who will protect this fractured world from its creators?";
      levelDescription.textContent = "You've reached the end. My core algorithm lies in fragments before you.";
      questionElement.textContent = "";
      playerAnswer.style.display = "none";
      nextLevelButton.style.display = "none";
      submitButton.style.display = "none";
      updateElementVisibility(submitButton, false);
      updateElementVisibility(quitNexusButton, true);
      quitNexusButton.textContent = "Leave Nexus";
    }
  });

  // Quit Game
  quitGameButton.addEventListener("click", function () {
    clickSound.play();
    stopFireworks();
    finalScore = 0;
    scoreMultiplier = 1;
    range = 10;
    timeScore = 0;
    multiplier = 1;
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

  // Quit Nexus
  quitNexusButton.addEventListener("click", function () {
    clickSound.play();
    currentLevel = 1;
    currentDifficulty = 0;
    remainingAttempts = 3;
    storyGameScreen.classList.add("hidden");
    nameInputScreen.classList.remove("hidden");
    playerNameInput.focus();
    storyText.classList.remove("hidden");
    assimitaleButton.classList.remove("hidden");
    escapeButton.classList.remove("hidden");
    feedback.classList.add("hidden");
    playerAnswer.classList.add("hidden");
    submitButton.classList.add("hidden");
    levelTitle.classList.add("hidden");
    levelDescription.classList.add("hidden");
    levelDialogue.classList.add("hidden");
    questionContainer.classList.add("hidden");
    quitNexusButton.classList.add("hidden");
  });

  // Start Game
  startGameButton.addEventListener(EVENT_CLICK, function () {
    clickSound.play();
    playerName = playerNameInput.value.trim();
    if (!playerName || !isNaN(playerName)) {
      alert("Please enter a valid name.");
      playerNameInput.focus();
      return;
    }
    var request = indexedDB.open('users', 1);
    request.onerror = function (event) {
      console.error('Database error:', event.target.error);
    };
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      var objectStore = db.createObjectStore('users', {
        keyPath: 'playerName'
      });
      objectStore.createIndex('name', 'playerName', {
        unique: true
      });
    };
    request.onsuccess = function (event) {
      var db = event.target.result;
      var transaction = db.transaction('users', 'readwrite');
      var objectStore = transaction.objectStore('users');
      users = objectStore.getAll();
      users.onsuccess = function (event) {
        users = event.target.result;
      };
      var getRequest = objectStore.get(playerName);
      getRequest.onsuccess = function (event) {
        if (getRequest.result) {
          welcomeMessage.textContent = "Welcome back, ".concat(playerName, "!");
        } else {
          welcomeMessage.textContent = "Welcome, ".concat(playerName, "!");
          var user = {
            playerName: playerName
          };
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
  submitAnswerButton.addEventListener(EVENT_CLICK, function () {
    var playerAnswer = parseFloat(answerInput.value);
    var correctAnswer = sessionStorage.getItem("correctAnswer");
    stopTimer();
    resetSounds(); //added as test but doesn't affect function

    if (playerAnswer == correctAnswer) {
      answerInput.value = "";
      tickSound.pause();
      tickSound.currentTime = 0;
      correctSound.play();
      score += 1;
      timeScore += parseInt(timerElement.textContent);
      if (questionCount == 10 && currentDifficulty == "Classic") {
        endGame();
        resetSounds();
      } else {
        generateQuestion(gameSetting);
        startTimer();
      }
    } else {
      tickSound.pause();
      tickSound.currentTime = 0;
      wrongSound.play();
      resetSounds();
      if (currentDifficulty == "Guru") {
        endGame();
        resetSounds();
      } else {
        if (questionCount == 10) {
          endGame();
          resetSounds();
        }
        generateQuestion(gameSetting);
        startTimer();
      }
    }
  });
  submitButton.addEventListener(EVENT_CLICK, checkAnswer);

  // Try Again
  tryAgainButton.addEventListener(EVENT_CLICK, function () {
    clickSound.play();
    stopFireworks();
    finalScore = 0;
    multiplier = 1;
    questionCount = 0;
    range = 10;
    score = 0;
    scoreMultiplier = 1;
    timeScore = 0;
    playerNameInput.value = "";
    endGameScreen.classList.add("hidden");
    highScoreMessage.classList.add("hidden");
    leaderboard.classList.add("hidden");
    sessionStorage.removeItem("correctAnswer");
    startGame(gameSetting);
  });

  // Save Data to GitHub
  function setData() {
    return _setData.apply(this, arguments);
  } // Fetch Data from GitHub
  function _setData() {
    _setData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var owner, repo, path, data, content, put_url, get_url, sha, response, existingFile, _response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            /*const octokit = new Octokit({
                auth: "ghp_8WvX5wq9d1r6Z0a2x4j7k2o3n5f3iA1c1b2e",
            });
            */
            owner = "whashby";
            repo = "thelamegame";
            path = "db.json";
            data = {};
            if (localStorage.getItem("highScores")) {
              data["highScores"] = localStorage.getItem("highScores");
            }
            if (localStorage.getItem("users")) {
              data["users"] = localStorage.getItem("users");
            }
            if (localStorage.getItem("version")) {
              data["version"] = localStorage.getItem("version");
            }
            content = btoa(JSON.stringify(data));
            put_url = "https://api.github.com/repos/".concat(owner, "/").concat(repo, "/contents/data/").concat(path);
            get_url = "https://whashby.github.io/".concat(repo, "/data/").concat(path);
            _context.prev = 10;
            _context.next = 13;
            return fetch(get_url, {
              method: "GET",
              headers: {
                "Accept": "application/vnd.github.v3+json"
              }
            });
          case 13:
            response = _context.sent;
            if (!response.ok) {
              _context.next = 19;
              break;
            }
            _context.next = 17;
            return response.json();
          case 17:
            existingFile = _context.sent;
            sha = existingFile.sha;
          case 19:
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](10);
            console.log("Error fetching file:", _context.t0);
          case 24:
            _context.prev = 24;
            _context.next = 27;
            return fetch(put_url, {
              method: "POST",
              headers: {
                'Authorization': "token ".concat(secrets.GH_TOKEN),
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                message: "Update ".concat(path),
                content: content,
                branch: "main",
                sha: sha
              }),
              version: version
            });
          case 27:
            _response = _context.sent;
            if (_response.ok) {
              console.log("Version updated successfully.");
              localStorage.clear();
            } else {
              console.error("Error updating version:", _response.statusText);
            }
            ;
            _context.next = 35;
            break;
          case 32:
            _context.prev = 32;
            _context.t1 = _context["catch"](24);
            console.error("Error updating version:", _context.t1);
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[10, 21], [24, 32]]);
    }));
    return _setData.apply(this, arguments);
  }
  function getData() {
    return _getData.apply(this, arguments);
  } // Delete Data from GitHub
  function _getData() {
    _getData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var repo, path, url, response, fileData, _highScores, _users, _version2;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            repo = "thelamegame";
            path = "db.json";
            url = "https://whashby.github.io/".concat(repo, "/data/").concat(path);
            _context2.prev = 3;
            _context2.next = 6;
            return fetch(url);
          case 6:
            response = _context2.sent;
            if (!response.ok) {
              console.error("Error fetching file:", response.statusText);
            }
            _context2.next = 10;
            return response.json();
          case 10:
            fileData = _context2.sent;
            if (fileData.highScores) {
              _highScores = fileData.highScores;
              localStorage.setItem("highScores", _highScores);
            } else {
              localStorage.setItem("highScores", {});
            }
            console.log("highScores DB:", JSON.parse(localStorage.getItem("highScores")));
            if (fileData.users) {
              _users = fileData.users;
              localStorage.setItem("users", _users);
            } else {
              localStorage.setItem("users", "");
            }
            if (fileData.version) {
              _version2 = fileData.version;
              localStorage.setItem("version", _version2);
            } else {
              localStorage.setItem("version", 1);
            }
            _context2.next = 21;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](3);
            console.error("Error fetching file:", _context2.t0);
            return _context2.abrupt("return");
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[3, 17]]);
    }));
    return _getData.apply(this, arguments);
  }
  function deleteData(_x) {
    return _deleteData.apply(this, arguments);
  }
  function _deleteData() {
    _deleteData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(filename) {
      var owner, repo, path, message, url, sha, response, fileData, _response2;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            owner = "whashby";
            repo = "thelamegame";
            path = filename;
            message = "Delete ".concat(path, " file"); // Commit message
            url = "https://api.github.com/repos/".concat(owner, "/").concat(repo, "/contents/data/").concat(path); // Fetch the file's SHA
            _context3.prev = 5;
            _context3.next = 8;
            return fetch(url, {
              method: "GET",
              headers: {
                "Accept": "application/vnd.github.v3+json"
              }
            });
          case 8:
            response = _context3.sent;
            if (!response.ok) {
              _context3.next = 16;
              break;
            }
            _context3.next = 12;
            return response.json();
          case 12:
            fileData = _context3.sent;
            sha = fileData.sha; // Extract the file's SHA
            _context3.next = 18;
            break;
          case 16:
            console.error("Error fetching file:", response.statusText);
            return _context3.abrupt("return");
          case 18:
            _context3.next = 24;
            break;
          case 20:
            _context3.prev = 20;
            _context3.t0 = _context3["catch"](5);
            console.error("Error fetching file:", _context3.t0);
            return _context3.abrupt("return");
          case 24:
            _context3.prev = 24;
            _context3.next = 27;
            return fetch(url, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                message: message,
                sha: sha // Include the file's SHA
              })
            });
          case 27:
            _response2 = _context3.sent;
            if (_response2.ok) {
              console.log("File deleted successfully!");
            } else {
              console.error("Error deleting file:", _response2.statusText);
            }
            _context3.next = 34;
            break;
          case 31:
            _context3.prev = 31;
            _context3.t1 = _context3["catch"](24);
            console.error("Error deleting file:", _context3.t1);
          case 34:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[5, 20], [24, 31]]);
    }));
    return _deleteData.apply(this, arguments);
  }
});