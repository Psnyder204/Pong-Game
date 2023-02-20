class Score{

    constructor(){
        this.score = 0;
        
    }

    display() {
        fill(255);
        textSize(20);
        text(`Score: ${this.score}`, 10, 20);

    }

    increment() {
        this.score++
    }
}