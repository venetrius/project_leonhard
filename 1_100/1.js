/*
If we list all the natural numbers below  that are multiples of  or , we get  and . The sum of these multiples is .
Find the sum of all the multiples of  or  below .
*/
const sumOfMultiples = number => {
  const big_3 = BigInt(3)
  const big_5 = BigInt(5)
  const big_15 = BigInt(15)
  const big_2 = BigInt(2)
  number = number -1
  const a = BigInt(Math.floor(number / 3))
  const b = BigInt(Math.floor(number / 5))
  const c = BigInt(Math.floor(number / 15))

  return (((big_3+ big_3*a) * a + (big_5+ big_5*b) * b - (big_15 + big_15*c) * c)/big_2).toString()
}

console.log(sumOfMultiples(10))
