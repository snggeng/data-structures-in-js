class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this._length = 0
    this.head = null
  }

  get length() {
    return this._length
  }

  add(value) {
    let node = new Node(value)
    let currentNode = this.head

    // case 1: empty list
    if (!currentNode) {
      this.head = node
      this._length++
      return node
    }

    // case 2: non-empty list
    while (currentNode.next) {
      // find the last node
      currentNode = currentNode.next
    }
    // add new node to the last node
    currentNode.next = node
    this._length++

    return node
  }

  search(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = {error: 'non-existent node in this list'}

    // case 1: invalid position
    if (length === 0 || position < 1 || position > length) {
      console.log('length: ', length, 'position: ', position)
      throw new Error(message.error)
    }

    // case 2: valid position
    while (count < position) {
      // traverse to location of position
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  remove(position) {
    let currentNode = this.head,
        length = this._length,
        count = 0,
        message = {error: 'non-existent node in this list'},
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null

    // case 1: invalid position
    if (position < 0 || position > length) {
      throw new Error(message.error)
    }

    // case 2: first node is removed
    if (position === 1) {
      this.head = currentNode.next
      deletedNode = currentNode
      currentNode = null
      this._length--

      return deletedNode
    }

    // case 3: any other node is removed
    while (count < position) {
      beforeNodeToDelete = currentNode
      nodeToDelete = currentNode.next
      count++
    }

    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = null
    this._length--

    return deletedNode
  }
}

const main = () => {
  let sll = new SinglyLinkedList()
  for (let i = 0; i < 10; i++) {
    sll.add(Math.random())
  }

  console.log(sll.length, sll.search(1))
  sll.remove(1)
  console.log(sll.length, sll.search(1))
}

main()
