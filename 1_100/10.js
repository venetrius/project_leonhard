// only run on PE 
const isPrimeBrute = num => {
    if(num < 2) return false
    if(num === 2 ) return true
    for( let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false
    }
    return true
}

const sumOfPrimesBelow = upperBound => {
    if(upperBound < 2) return 0

    let sum = 0
    let nextInt = 2
    while (nextInt < upperBound) {
        if(isPrimeBrute(nextInt)) {
            sum += nextInt
        }
        nextInt++
    }
    return sum
}

console.log(sumOfPrimesBelow(2000000))