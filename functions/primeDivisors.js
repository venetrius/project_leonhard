const getDividers = n => {
  if(n < 2) return {}
  if(n == 2) return { 2: 1}

  const dividers = {}

  while(n % 2 == 0) {
    n = n / 2
    dividers[2] = dividers[2] ? dividers[2] + 1 : 1
  }

  let next = 3
  let upperBound =Math.sqrt(n)
  while(n > 1 && next <= upperBound) {
    while(n % next == 0) {
      if(!dividers[next]) dividers[next] = 0

      dividers[next] = dividers[next] + 1
      n = n / next
      upperBound =Math.sqrt(n)
    }
    next += 2
  }
  if(n > 1) {
    dividers[n] = 1
  }
  return dividers
}

console.log(getDividers(12))
console.log(getDividers(17))
console.log(getDividers(366))

