class MinStack {
  constructor() {
    this.tumpukan = []
    this.tumpukanMin = []
  }

  push(nilai) {
    // Kompleksitas waktu: O(1)
    this.tumpukan.push(nilai)
    if (this.tumpukanMin.length === 0 || nilai <= this.tumpukanMin[this.tumpukanMin.length - 1]) {
      this.tumpukanMin.push(nilai)
    }
  }

  pop() {
    // Kompleksitas waktu: O(1)
    if (this.tumpukan.length === 0) {
      return null
    }

    const nilai = this.tumpukan.pop()
    if (nilai === this.tumpukanMin[this.tumpukanMin.length - 1]) {
      this.tumpukanMin.pop()
    }
    return nilai
  }

  top() {
    // Kompleksitas waktu: O(1)
    return this.tumpukan.length === 0 ? null : this.tumpukan[this.tumpukan.length - 1]
  }

  getMin() {
    // Kompleksitas waktu: O(1)
    return this.tumpukanMin.length === 0 ? null : this.tumpukanMin[this.tumpukanMin.length - 1]
  }
}

const minStack = new MinStack()
minStack.push(5)
minStack.push(3)
minStack.push(7)
minStack.push(2)
console.log('getMin() =>', minStack.getMin()) // 2

minStack.pop()
console.log('getMin() =>', minStack.getMin()) // 3

minStack.pop()
console.log('getMin() =>', minStack.getMin()) // 3
