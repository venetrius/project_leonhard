// prime numbers

const isDivisibleByAny = (number, divisors) => {
  for (let divisor of divisors) {
    if(number % divisor === 0) {
      return true
    }
  }
  return false
}

const findBiggestDivisor = (number, divisors) => {
  for (let divisor of divisors) {
    if(number % divisor === 0) {
      return divisor
    }
  }
  return number
}

const findPrimesBelow = (n) => {
  if(n < 2) return []
  if(n == 2) return [2]

  const primes = [2]
  let next = 3
  while(next < n) {
    if(!isDivisibleByAny(next, primes)) {
      primes.push(next)
    }
    next += 2
  }
  return primes
}

const findLargesPrimeFactor = (n) => {
  const primesBelow = findPrimesBelow(n).reverse()
  return findBiggestDivisor(n, primesBelow)
}

console.log(findLargesPrimeFactor(13195))
