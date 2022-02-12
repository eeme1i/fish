export default class PointCounter{
    // input (int)
    constructor(defaultValue = 0){
        this.value = defaultValue;
        this.minValue = -10000;
    }


    // input (int)
    add(num){
        this.value += num;
        this.#checkIfLessThanMin();
    }

    // input (int)
    subtract(num){
        this.value -= num;
        this.#checkIfLessThanMin();
    }

    // input (int)
    multiply(num){
        this.value * num;
        this.#checkIfLessThanMin();
    }

    // input (int)
    setMinValue(num){
        this.minValue = num;
        this.#checkIfLessThanMin();
    }

    #checkIfLessThanMin(){
        if(this.value < this.minValue){
            this.value = this.minValue;
        }
    }
}