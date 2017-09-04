import { Node, SinglyLinkedList } from './singlyLinkedList'
// import { Node, DoublyLinkedList } from './doublyLinkedList'

/*
  Write code to remove duplicates form an unsorted linked list
  is it a singly linked list? or doubly? assume ssl first, the dll
*/

// O(N) using hashing
const removeDuplicates = (list) => {
  // iterate through linked list keeping a record of duplicates
  // using a boolean hash
  //console.log(list)
  let node = list.head
  let hash = {}
  let previous = null
  while (node) {
    // console.log('before checking for duplicate')
    // console.log('previous: ', previous, '\n node: ', node)
    // console.log('******************************')
    if (hash.hasOwnProperty(node.data)) {
      previous.next = node.next // list.head.next = next node
    } else {
      hash[node.data] = true
      previous = node // previous = list.head
    }
    node = node.next // head = list.head.next
  }
  // console.log('after checking')
  // console.log('previous: ', previous, 'node: ', node)
  return list.head
}

/* TEST CASES */

const main = () => {
  let sll = new SinglyLinkedList()
  let sll2 = new SinglyLinkedList()
  let arr = ['a', 'b', 'c', 'd', 'e']
  let arr2= ['a', 'b']
  for (let i = 0; i < 20; i++) {
    let num = Math.floor(Math.random()*5)
    let num2 = Math.floor(Math.random()*2)
    sll.add(arr[num])
    sll2.add(arr2[num2])
  }

  let n = removeDuplicates(sll)
  let m = removeDuplicates(sll2)

  console.log('test 1')
  while (n) {
    console.log(n.data)
    n = n.next
  }
  console.log('test 2')
  while (m) {
    console.log(m.data)
    m = m.next
  }
}

main()
