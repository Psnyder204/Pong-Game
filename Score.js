class Score{

    constructor(){
        this.score = 0;

      
        
        
    }

    displayPlayerScore() {
        fill(255);
        textSize(20);
        // textAlign(CENTER, TOP);
        text(`Player: ${this.score}`, 200, 30);

    }

    displayAiScore() {
        fill(255);
        textSize(20);
        // textAlign(CENTER, TOP);
        text(`AI: ${this.score}`, 350, 30);

    }

    increment() {
        this.score++
    }
}