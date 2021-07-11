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

const unionOfTwoMap = (a,b) => {
  const res = {}
  Object.keys(a).forEach(key => {
    res[key] = Math.max(a[key], b[key] || 0)
  })
  Object.keys(b).forEach(key => {
    if(!res[key]) {
      res[key] = b[key]
    }
  })
  return res
}

const calc = map => {
  const reducer = (accumulator, [divider, power]) => {
    return accumulator * Math.pow(divider, power)
  }

  return Object.entries(map).reduce(reducer,1)
}

const getSmallestMultiple = n => {
  let dividers = { 1: 1}
  for (let i = 2; i <= n; i++) {
    const newDividers = getDividers(i)
    dividers = unionOfTwoMap(dividers, newDividers)
  }
  return calc(dividers)
}


console.log(getSmallestMultiple(10))
// console.log(getDividers(9))

// console.log(calc({ '1': 1, '2': 3, '3': 3, '5': 1, '7': 1 }))
// console.log(calc({ '1': 1, '2': 3, '3': 3 }))
// console.log(calc({ '1': 1, '2': 3, '3': 3, '5': 1 }))
// console.log(calc({ '1': 1, '2': 3, '3': 3, '5': 1, '7': 1 }))
