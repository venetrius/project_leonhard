const primes = []

const isDivisibleByAny = (number, divisors) => {
  for (let divisor of divisors) {
    if(number % divisor === 0) {
      return true
    }
  }
  return false
}

const findFirstNPrime= (n) => {
  if(n < 1) return

  primes.push(2)

  let next = 3
  while(primes.length < n) {
    if(!isDivisibleByAny(next, primes)) {
      primes.push(next)
    }
    next += 2
  }
}

