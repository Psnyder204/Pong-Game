
let playerPaddle;
let aiPaddle;
let ball;
let playerScore;
let aiScore;

function setup() {
    createCanvas(624, 351);
    playerPaddle = new Paddle(26);
    aiPaddle = new Paddle(width - 48);
    ball = new Ball();
    playerScore = new Score();
    aiScore = new Score();


}

function draw() {
    background(0);

    playerPaddle.display();
    aiPaddle.display();
    playerScore.displayPlayerScore();
    aiScore.displayAiScore();

    playerPaddle.update(); 
    aiPaddle.update();

    processAI();

    ball.update();
    ball.display();

    ball.hasHitPlayer(playerPaddle);
    ball.hasHitAi(aiPaddle);

    stroke(255);
    line(width/2, 0, width/2, height);

    if (ball.x + ball.r > width) {
        playerScore.increment();
    }
    if (ball.x - ball.r > width) {
        aiScore.increment();
    }
}

function processAI() {
    let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

    if (middleOfPaddle > ball.y) 
    {
        aiPaddle.isUp = true;
        aiPaddle.isDown = false;
    }
    else
    {
        aiPaddle.isDown = true;
        aiPaddle.isUp = false;
    }

}

function keyPressed() {

    if (keyCode == UP_ARROW) 
    {
        playerPaddle.isUp = true;
    }
    else if (keyCode == DOWN_ARROW)
    {
        playerPaddle.isDown = true;
    }
}

function keyReleased() {

    if (keyCode == UP_ARROW) 
    {
        playerPaddle.isUp = false;
    }
    else if (keyCode == DOWN_ARROW)
    {
        playerPaddle.isDown = false;
    }
}



