/*
Implement an algorithm to determin if a stirng has all unique characters.
What if you cannot use additional data structures?
*/

// O(N) Using a set
isUnique = (str) => {
  // compare each char in str against each other
  // for loop in a for loop
  let unique = true
  if (str.length === 0) return console.log(str, unique)
  let arr = str.split('')
  let count = str.length-1

  var mySet = new Set()
  arr.forEach((elem, index) => { // forEach is O(N)
    mySet.has(elem) ? unique = false : // set.has() is O(1)
      count===index ? unique =true : mySet.add(elem) //set.add() is O(1)
    count--
  })
  return console.log(str, unique)
}

// O(N^2) Double for loop
isUnique2 = (str) => {
  let unique = true
  if (str.length === 0) return console.log(str, unique)
  let arr = str.split('')
  let temp = []
  arr.forEach((elem, index) => { // forEach is O(N)
    temp.includes(elem) ? unique=false : temp.push(elem) // includes is O(N)
  })
  return console.log(str, unique)
}

// O(N) Using a hash table (object)
isUnique3 = (str) => {
  let unique = true
  if (str.length === 0) return console.log(str, unique)
  let arr = str.split('')
  let obj = {}
  arr.forEach((elem, index) => { // forEach is O(N)
    obj.hasOwnProperty(elem) ? unique = false : obj[elem] = elem
  })
  return console.log(str, unique)
}

// bitwise?? without using other data structures
isUnique4 = (str) => {
  let unique = true
  if (str.length === 0) return console.log(str, unique)
  for (let i = 0; i < str.length; i++) {
    // convert each char to binary
    let s = str[i].charCodeAt(0).toString(2)

  //   let newStr = str.split(str[i]).join('')
  //   console.log(newStr)
  // console.log(str[i], s)
  }
}

/* TEST CASES */

s1 = '1234567' // true
s2 = 'qwerty' // true
s3 = 'qwertyq' // false
s4 = 'qwertyuiopasdfhgjks' // false
s5 = '1234567890qwertyuiopasdfghjkl' // true
s6 = '' // true

isUnique4(s1)
isUnique4(s2)
isUnique4(s3)
isUnique4(s4)
isUnique4(s5)
isUnique4(s6)
