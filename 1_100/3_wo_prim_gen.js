const findLargesPrimeFactor = (n) => {
  if(n < 2) return []
  if(n == 2) return [2]

  let max = 0
  while(n % 2 == 0) {
    n = n / 2
    max = 2
  }

  let next = 3
  let upperBound =Math.sqrt(n)
  while(n > 1 && next <= upperBound) {
    while(n % next == 0) {
      max = next
      n = n / next
      upperBound =Math.sqrt(n)
    }
    next += 2
  }
  return n == 1 ? max : n
}

console.log(findLargesPrimeFactor(13195))
