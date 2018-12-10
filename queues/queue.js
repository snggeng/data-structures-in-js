/*
  QUEUES
  First in first out (FIFO)

  METHODS
  1. enqueue(el(s)): adds a new item (or several) at the back of the queue.
  2. dequeue(): removes and returns the first item from the queue (at the front of queue).
  3. front(): return first element from the queue (first element added into queue).
              Queue is not modified.
  4. isEmpty(): return boolean true if queue does not contain any elements, and
                false if the queue is > 0.
  5. size(): returns the number of elements in the queue.
*/

class Queue {
  constructor () {
    this.items = []
  }
  enqueue (element) {
    this.items.push(element)
  }
  dequeue () {
    return this.items.shift()
  }
  front () {
    return this.items[0]
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }

  // debugging
  print () {
    console.log(this.items.toString())
  }
}

// Private properties
let QueuePrivate = (() => {
  const items = new WeakMap()
  class Queue {
    constructor () {
      items.set(this, [])
    }
    enqueue (element) {
      let q = items.get(this)
      q.push(element)
    }
    dequeue () {
      let q = items.get(this)
      let r = q.shift()
      return r
    }
  }
  return Queue
})()

class QueueElement {
  constructor (element, priority) {
    this.element = element
    this.priority = priority
  }
}

// Priority Queue
class PriorityQueue {
  constructor () {
    this.items = []
  }

  enqueue (element, priority) {
    let qElement = new QueueElement(element, priority)
    let added = false
    for (let i = 0; i < this.items.length; i++) {
      if (qElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, qElement)
        added = true
        break
      }
    }
    if (!added) {
      this.items.push(qElement)
    }
  }

  dequeue () {
    return this.items.shift()
  }
  front () {
    return this.items[0]
  }
  isEmpty () {
    return this.items.length === 0
  }
  size () {
    return this.items.length
  }

  print () {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`${this.items[i].element} - ${this.items[i].priority}`)
    }
  }

}

let queue = new PriorityQueue()
console.log(queue.isEmpty()) // true
queue.enqueue('john', 2)
queue.enqueue('jack', 1)
console.log(queue.front())
queue.print()
queue.enqueue('camila', 1)
queue.print()
console.log(queue.size())
console.log(queue.isEmpty()) // false
queue.dequeue()
queue.dequeue()
queue.print()
