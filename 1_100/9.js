// passing PE but not HK

const findTriplet = n => {
  let max = -1

  for(let i = 1; i < n - 2; i++ ) {
    const squareA = i * i
    for(let j = 0; j < n -1 && i + j <= n; j++ ) {
      const c = n - i - j
      if (c > j && squareA + j * j == c * c) {
        max = Math.max(max, i * j * c)
      }
    }
  }
  return max
}

console.log(findTriplet(1000))
