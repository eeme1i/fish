// Helper functions for game mechanics



// return num array with amount of random numbers between 0 and maxValue
// does not include same number twice
// input (int, int, int) are they int in js?? i'm from c# and python 
export function GetNumbers(seed, amount, maxValue){
    let nums = [seed];
    let num = seed;

    for (let i = 0; i < amount; i++){
        while (true){
            num += GetRandom(maxValue);
            while (num > maxValue){
                num -= maxValue;
            }
            if (!nums.includes(num)){
                nums += num;
                break;
            }
        }
    }
    return nums;
}


// get random number between 0 and max
export function GetRandom(maxValue){
    return Math.floor(Math.random() * maxValue);
}