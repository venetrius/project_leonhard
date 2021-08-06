class Heap {
  constructor() {
    this.nodes = []
    this.lastIndex = -1
  }

  _swap = (a, b) => {
    const nodes = this.nodes
    const temp = nodes[a]
    nodes[a] = nodes[b]
    nodes[b] = temp
  }
  _getParentIndex = index => Math.ceil(index /2) - 1

  _propagateUp() {
    let index = this.lastIndex
    let node = this.nodes[index]
    while(index > 0) {
      let parenIndex = this._getParentIndex(index)
      let parentNode = this.nodes[parenIndex]
      if(parentNode.value < node.value) {
        this._swap(index, parenIndex)
        index = parenIndex
      } else {
        return
      }
    }
  }

  // TODO fix me, using shift for now
  _propagateDown() {
    let index = 0
    let node = this.nodes[index]
    while(index < this.lastIndex) {
      let [leftIndex, rightIndex] = [index * 2, index * 2 + 1]
      if(leftIndex > this.lastIndex) return
      let childIndex, child
      if(rightIndex > this.lastIndex) {
        child = this.nodes[leftIndex]

      } else {
        let [left, right] = [this.nodes[leftIndex], this.nodes[rightIndex]]
        childIndex = left.value > right.value ? leftIndex : rightIndex
        child = this.nodes[childIndex]
      }
      if(node.value < child.value) {
        this._swap(index, childIndex)
        index = childIndex
      } else {
        return
      }
    }
  }
  print = () => console.log(this.nodes)

  push = (node) => {
    this.nodes.push(node)
    this.lastIndex++
    this._propagateUp()
  }

  pop = () => {
    // this._swap(0, this.lastIndex)
    // const res = this.nodes.pop()
    // this.lastIndex--
    // this._propagateDown()
    return this.nodes.shift()
  }


}

class Node {
  constructor(value, weight) {
    this.value = value
    this.weight = weight
  }
}

const testHeap = () => {
  const heap = new Heap()
  console.log(heap.lastIndex)
  heap.push(new Node(1,1))
  heap.push(new Node(3,1))
  heap.push(new Node(4,1))
  heap.push(new Node(-1,1))
  heap.push(new Node(7,1))

  heap.print()
  console.log('pop ', heap.pop())
  heap.print()
  console.log('pop ', heap.pop())
  heap.print()
  console.log('pop ', heap.pop())
  heap.print()
}

testHeap()
