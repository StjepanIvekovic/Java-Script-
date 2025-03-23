let score = 0;
        let timeLeft = 10;
        let timerInterval;

        function startGame() {
            score = 0;
            timeLeft = 10;
            document.getElementById("score").innerText = score;
            document.getElementById("timer").innerText = timeLeft;
            document.getElementById("clickButton").style.display = "inline-block";
            document.getElementById("clickButton").disabled = false;
            document.getElementById("startButton").disabled = true;

            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById("timer").innerText = timeLeft;
                
                if (timeLeft === 0) {
                    clearInterval(timerInterval);
                    document.getElementById("clickButton").disabled = true;
                    document.getElementById("startButton").disabled = false;
                    alert("Time's up! Your final score is: " + score);
                }
            }, 1000);
        }

        function increaseScore() {
            score++;
            document.getElementById("score").innerText = score;
        }