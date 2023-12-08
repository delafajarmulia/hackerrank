function birthdayCakeCandles(candles) {
    // Write your code here
    let max = parseInt(Math.max(...candles))
    let find = 0

    for(let x = 0; x < candles.length; x++){
        if(candles[x] === max){
            find += 1
        }
    }

    return find
}

candles = [3, 2, 1 ,3]
console.log(birthdayCakeCandles(candles))

// const array1 = [5, 12, 8, 130, 44];

// // const found = array1.reduce(array1.find((element) => element > 10));
// let x = array1.reduce(x)
// console.log(x);