
// const threeState = () => ({
//   init: () => {
//     this.val = true
//     this.next = false
//   },
//   getNext: () => {
//     const next = this.val == this.prev
//     this.prev = this.val
//     this.val = next
//     return this.val
//   }
// })
const generateFib = n => continueFib(BigInt(1), BigInt(2), BigInt(n))

const continueFib = (first, second, max) => {
  if(max < 2) return 0
  if(max == 2) return 2
  let sum = BigInt(2)
  // let stateMachine = threeState()
  // stateMachine.init()
  while(true) {
    const next = first + second
    first = second
    second = next
    if(next > max) {
      return sum
    }
    if(next % BigInt(2) == 0) {
      sum += second
    }
  }
}
