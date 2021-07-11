// const sumOfSquares = n => {
//   let sum = BigInt(0)
//   for(let i = 0; i <= n; i++){
//     sum += BigInt(i) * BigInt(i)
//   }
//   return sum
// }

const sumOfSquares = n => {
  const one = BigInt(1)
  const two = BigInt(2)
  const six = BigInt(6)
  const bigN = BigInt(n)
  return (bigN*(bigN+one)*((two*bigN)+one)) / six
}

const squareOfSums = n => {
  let sum = BigInt(0)
  for(let i = 0; i <= n; i++){
    sum += BigInt(i)
  }
  return sum * sum
}

console.log(squareOfSums(10) - sumOfSquares(10))
