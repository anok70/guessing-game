    class GuessingGame {
        constructor(number,minNum,maxNum) {
            this.number = number; 
            this.minNum = minNum;
            this.maxNum = maxNum;
        }
    
        setRange(min, max) {
            this.minNum = min;
            this.maxNum = max;
        }
    
        guess() {
    return Math.ceil((this.maxNum + this.minNum)/2);
        }
    
        lower() {
            this.maxNum = Math.ceil((this.maxNum + this.minNum)/2);
        }
    
        greater() {
            this.minNum = Math.ceil((this.maxNum + this.minNum)/2);
    
        }
    }
    
    module.exports = GuessingGame;


