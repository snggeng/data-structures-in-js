class Node {
  constructor(value){
    this.data = value
    this.previous = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(){
    this._length = 0
    this.head = null
    this.tail = null
  }

  get length() {
    return this._length
  }

  add(value){
    let node = new Node(value)
    if (this._length) {
      // case 1: empty list
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    } else {
      // case 2: nodes exist
      this.head = node
      this.tail = node
    }
    this._length++

    return node
  }

  search(position){
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = { error: 'non-existent node in this list' }

    // case 1: invalid position
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.error)
    }

    // case 2: valid position
    while (count < position) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  remove(position){
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = { error: 'non-existent node in this list',
                    success: `node successfully deleted at position ${position}` },
        beforeNodeToDelete = null,
        afterNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null

        // case 1: invalid position
        if (length === 0 || position > length) {
          throw new Error(message.error)
        }
        // LOCATE the node at position
        // case 2: valid position, first node is removed
        if (position === 1) {
          this.head = currentNode.next
          console.log(this.head)
          // there is a second node
          if (this.head) {
            this.head.previous = null
          // there is no second node
          } else {
            this.tail = null
          }
        // last node is removed
      } else if (position === this._length) {
        //console.log('next:', !!this.tail.next, 'previous:', !!this.tail.previous)
        this.tail = this.tail.previous
        this.tail.next = null
      // a middle node is removed (not first or last)
    } else {
      // deleting the right node and shifting head and tail
      while (count < position) {
        currentNode = currentNode.next
        count++
      }
      beforeNodeToDelete = currentNode.previous
      nodeToDelete = currentNode
      afterNodeToDelete = currentNode.next

      beforeNodeToDelete.next = afterNodeToDelete
      afterNodeToDelete.previous = beforeNodeToDelete
      deletedNode = nodeToDelete
      nodeToDelete = null
    }
    this._length--

    return console.log(message.success)
  }
}

const main = () => {
  let dll = new DoublyLinkedList()
  for (let i = 0; i < 10; i++) {
    dll.add(Math.random())
    console.log(dll.search(i+1).data)
  }
  dll.remove(1)
  dll.remove(5)
  dll.remove(8)
  console.log(dll.length)
}

main()
