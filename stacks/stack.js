/*
  STACKS
  Last in first out (LIFO)

  METHODS:
  1. push(el(s)): add a new item (or several items) to the top of the stack.
  2. pop(): removes the top item from the stack. Return the removed element.
  3. peek(): returns the top element from the stack. Stack is not modified.
  4. isEmpty(): returns boolean (true) if the stack does not contain any elements,
                false if stack is > 0.
  5. clear(): removes all elements in the stack.
  6. size(): returns the number of elements that the stack contains.
*/

class Stack {
  constructor() { this.items = [] }

  // METHODS
  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length-1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  clear() {
    this.items = []
  }

  // For debugging
  print() {
    console.log(this.items.toString())
  }
}

// To simulate private methods or variables, we can use WeakMap()

let StackPrivate = (() => {
  const items = new WeakMap()
  class Stack {
    constructor() {
      items.set(this, [])
    }
    push(element) {
      let s = items.get(this)
      s.push(element)
    }
    pop() {
      let s = items.get(this)
      let r = s.pop()
      return r
    }
    peek() {
      let s = items.get(this)
      return s[s.length-1]
    }

    isEmpty() {
      let s = items.get(this)
      return s.length === 0
    }

    size() {
      let s = items.get(this, [])
      return s.length
    }

    clear() {
      return items.set(this, [])
    }
    // For debugging
    print() {
      console.log(items.get(this).toString())
    }
  }
  return Stack
})()



//let stack = new Stack()
let stack = new StackPrivate()
console.log(stack.isEmpty()) // true
stack.push(5)
stack.push([6, 7])
stack.push(8)
stack.print()
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
