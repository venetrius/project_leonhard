// work in progress ?

const million = 1000000

const isPrimeBrute = num => {
  if(num < 2) return false
  if(num === 2 ) return true
  for( let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) return false
  }
  return true
}

const getPrimesBelowMillion = () => {
  const primes = {}
  let int = 0

  while(int < million){
    if(isPrimeBrute(int)) primes[int] = int
    int++
  }
  return primes
}

const findGreatestPrimeForStartIndex = (index, array, map) => {
  let sum = array[index]
  let longestSequenceToGivePrime = 0
  let primeWithLongestSeq = 0
  let numberOfPrimes = 1
  // console.log('start',{sum, index, nextP: array[index]})

  while(index < array.length && sum < million) {
    sum += array[index]
    numberOfPrimes++
    // console.log({sum, index, nextP: array[index]})
    if(sum < million && map[sum]) {
      longestSequenceToGivePrime = numberOfPrimes
      primeWithLongestSeq = sum
    }
    index++
  }
  return {prime: primeWithLongestSeq, len: longestSequenceToGivePrime }
}

const findGreatestPrime = () => {
  const primesMap = getPrimesBelowMillion()
  const primesArray = Object.values(primesMap)
  let maxLength = 0
  let primeWithMaxLength = 0
  for(let i = 0; i < primesArray.length; i++) {
    const subRes = findGreatestPrimeForStartIndex(i, primesArray, primesMap)
    // console.log(subRes)
    if(subRes.len > maxLength) {
      maxLength = subRes.len
      primeWithMaxLength = subRes.prime
    }
  }
  return primeWithMaxLength
}


console.log(findGreatestPrime())
