class Node {
    constructor(value, next) {
      this.value = value;
      this.next = next;
    }
  }
  class Queue {
    constructor() {
      this.head = null;
      this.pop = () => {
          if (!this.head) return null
          const next = this.head
          this.head = next.next
          return next.value
      };
      this.push = newVal  => {
          const newNode = new Node(newVal, this.head)
          this.head = newNode
      }
      this.top = () => this.head && this.head.value
      this.isEmpty = () => !this.head
    }
  }