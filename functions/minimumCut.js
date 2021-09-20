const { readLinesFromFiles } = require('../data/readFile')

class Node {
  constructor(neighbors) {
    this.neighbors = neighbors
    for(let neighbor of neighbors) {
      neighbor.add(this)
    }
  }

  add = (node) => this.neighbors.push(node)
}

const solve = async() => {
  const lines = await readLinesFromFiles('../data/adjacencyList.txt', '\t')
}

solve()
