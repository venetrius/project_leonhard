const isPrimeBrute = num => {
    if(num < 2) return false
    if(num === 2 ) return true
    for( let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
        if (num % i === 0) return false
    }
    return true
}

const isPrimeDivisonByPrimes = (num, primes) => {
    if(num < 2) return false
    const upperBound = Math.floor(Math.sqrt(num))
    for(let prime of primes) {
        if(!prime || prime > upperBound) return true
        if (num % prime === 0) return false
    }
    return true
}

const isPrimeDivisonByPrimeShifts = (number, primes, shifts, remainders) => {
    const upperBound = Math.floor(Math.sqrt(number))
    shifts[0]++
    remainders[0]++
    if(shifts[0] == 3) {
        shifts[0] == 0
        return 0
    }
    for(let i = 1; i < primes.length; i++) {
        shifts[i] += remainders[i - 1]
        remainders[i] += remainders[i - 1]
        remainders[i - 1] = 0
        if(shifts[i] >= primes[i]) {
            shifts[i] %= primes[i]
            if (shifts[i] == 0) {
                return 0
            }
        }
        if(primes[i] < upperBound) return 0
    }
    const lastIndex = primes.length-1
    // console.log({primes, shifts, remainders})
    const nextPrime = primes[lastIndex] + 2 * remainders[lastIndex]
    remainders[lastIndex] = 0
    return nextPrime
}


const naive = n => {
    let count = 0
    let lastPrime = 0
    let nextInt = 2
    while (count < n) {
        if(isPrimeBrute(nextInt)) {
            count++
            lastPrime = nextInt
        }
        nextInt++
    }
    return lastPrime
}

const usingPrimes = n => {
    if(n === 0) return 0
    if(n === 1 ) return 2
    const primes = [2]
    // const primes = Array(n)
    // primes[0] = 2
    // let index = 1
    let nextInt = 3
    // while (index < n) {
    while (primes.length < n) {    
        if(isPrimeDivisonByPrimes(nextInt, primes)) {
            // primes[index++] = nextInt
            primes.push(nextInt)
        }
        nextInt+= 2
    }
    return primes[primes.length - 1]
}

const usingPrimesWAllocatedArray = n => {
    if(n === 0) return 0
    if(n === 1 ) return 2
    // const primes = [2]
    const primes = Array(n)
    primes[0] = 2
    let index = 1
    let nextInt = 3
    while (index < n) {
    // while (primes.length < n) {    
        if(isPrimeDivisonByPrimes(nextInt, primes)) {
            primes[index++] = nextInt
            // primes.push(nextInt)
        }
        nextInt+= 2
    }
    return primes[primes.length - 1]
}

const usingShifter = n => {
    if(n === 0) return 0
    if(n === 1 ) return 2
    if(n === 2) return 3
    const primes = [3]
    const shifts = [0]
    const remainders = [0]
    let number = 5
    while (primes.length < n) {
        // console.log({number})
        const partRest = isPrimeDivisonByPrimeShifts(number,primes, shifts, remainders)
        number += 2
        if(partRest) {
            // console.log({partRest})
            primes.push(partRest)
            shifts.push(0)
            remainders.push(0)
        }
    }
    return primes[primes.length - 1]
}

const n = 100 // 100000
console.time("naive")
console.log(naive(n))
console.timeEnd("naive")

console.time("usingPrimes")
console.log(usingPrimes(n))
console.timeEnd("usingPrimes")

console.time("usingPrimesWAllocatedArray")
console.log(usingPrimesWAllocatedArray(n))
console.timeEnd("usingPrimesWAllocatedArray")


console.time("usingShifter")
console.log(usingShifter(n))
console.timeEnd("usingShifter")
