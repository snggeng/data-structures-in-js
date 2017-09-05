import { Node, SinglyLinkedList } from './singlyLinkedList'

/*
  Implement an algorithm to find the kth to last
  element of a singly linked list

  e.g.

  A -> B -> C -> D -> E -> F -> G -> null

  k= 3

  find the 3rd to last element of a sll, i.e. E

  Assume that length of list is unknown, i.e. input is starting node
*/

// Brute force: iterate through list once to get length O(N)
// iterate again to find length-k position, return node O(N)

// O(N) Using recursion
const kthToLast = (head, k) => {
  if (head === null) return 0
  let index = kthToLast(head.next, k) +1
  if (index == k) {
    console.log(`${k}th to the last node is ${head.data}`)
  }
  console.log(head.data)
  return index
}

// O(N) but slightly more optimal iterative
const kthToLast2 = (head, k) => {
  if (head === null) return 0
  let p1 = head, p2 = head
  for (let i=0; i < k; i++) {
    if (p1 === null) return null
    p1 = p1.next
  }

  while (p1) {
    p1 = p1.next
    p2 = p2.next
  }
  console.log(`${k}th to the last node is ${p2.data}`)
  return p2
}

const main = () => {
  let sll = new SinglyLinkedList()
  let arr = []
  for (let i=0; i < 20; i++) {
    let num = Math.floor(Math.random()*20)
    sll.add(num)
    arr.push(num)
  }
  console.log(arr)
  kthToLast(sll.head, 20)
  kthToLast(sll.head, 19)
}

main()
