// const createArrayWithZeros = size => {
const initializeArray = (length, defValue = 0) => {
  const array = Array(length)
  for (let i = 0; i < length; i++) array[i] = defValue
  return array
}

const createBestSelection = (items, maxWeight) => {
  const solution = []
  // console.log({solution})

  solution.push(initializeArray(maxWeight + 1))
  // console.log({solution})

  for(let i = 1; i <= items.length; i++) {
    const [value, weight] = items[i-1]
    const cases = initializeArray(maxWeight + 1)
    for(let j = 1; j <= maxWeight; j++) {
      if(weight <= j) {
        const includedVal = (solution[i-1][j-weight] || 0 ) + value
        // console.log({value, weight, j, includedVal, prefix: (solution[i-1][j-weight] || 0 )})
        cases[j] = Math.max(solution[i-1][j], includedVal)
      }
    }
    solution.push(cases)
    // console.log({solution})

  }
  console.log(JSON.stringify(solution))
  return solution[items.length][maxWeight]
}

const items = [
  [2, 5],
  [3, 4],
  [2, 2],
  [2, 1],
  [4, 3]
]

const maxWeight = 6
console.log(createBestSelection(items, maxWeight))

 //93 8
const testItems2 = [
[7 , 2 ],
[4 , 10],
[10,  2],
[6 , 6 ],
[5 , 9 ],
[8 , 6 ],
[1 , 9 ],
[5 , 10]
]
//Answer :- 46
console.log(createBestSelection(testItems2, 20))


const [knapsack_size, number_of_items] = [76 , 100]

// console.log(createBestSelection(require('../../test').ks2, knapsack_size))
