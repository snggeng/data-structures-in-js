const colors = require('colors')

/*
Given two strings, write a method to decide if one is a permutation of the other.
*/

// Check if string A is a permutation of string B
// isPermutation = strings A and B have the number of characters, but different order

// O(N^2) Double for loop
checkPermutation = (strA, strB) => {
  console.log('\x1b[36m%s\x1b[0m', 'string A: ' + strA, 'string B: ' + strB)
  let isPermutation = false
  let arrA = strA.split('')
  let arrB = strB.split('')
  arrA.forEach((elem, index) => {
    strB.includes(elem) ? isPermutation=true : isPermutation=false
  })
  console.log('string A is a permutation of B? '.red, isPermutation)
  console.log('****************************************'.yellow)
  return isPermutation
}
// O(NlogN) using sorting to reorder characters for comparison
checkPermutation1 = (strA, strB) => {
  console.log('\x1b[36m%s\x1b[0m', 'string A: ' + strA, 'string B: ' + strB)
  let isPermutation = false
  if (strA.length !== strB.length) return isPermutation=false
  let arrA = strA.split('').sort()
  let arrB = strB.split('').sort()
  arrA.forEach((elem, index) => {
    arrB[index] == elem ? isPermutation=true : isPermutation=false
  })
  console.log('string A is a permutation of B? ', isPermutation)
  console.log('\x1b[36m%s\x1b[0m', '****************************************')
  return isPermutation
}

// O(N)
checkPermutation2 = (strA, strB) => {
    let isPermutation = false
    // check if strings are same length
    if (strA.length !== strB.length) return isPermutation=false
    // split strings into arrays of chars
    let arrA = strA.split('')
    let arrB = strB.split('')
    // store in hash table
    let myObj = arrayToObject(arrA) // O(N)
    console.log(myObj)
    arrB.forEach((elem, index) => { // O(N)
      myObj[elem] > 0 ? myObj[elem]-- : isPermutation=false
    })
    Object.values(myObj).forEach((elem, index) => { // O(N)
      elem !== 0 ? isPermutation=false : isPermutation=true
    })
    console.log('\x1b[36m%s\x1b[0m', 'string A: ' + strA, 'string B: ' + strB)
    console.log('string A is a permutation of B? ', isPermutation)
    console.log('\x1b[36m%s\x1b[0m', '****************************************')
    return isPermutation
}

arrayToObject = (arr) => {
  return arr.reduce((prev, curr) => {
    if (prev.hasOwnProperty(curr)) {
      prev[curr] += 1
    } else {
      prev[curr] = 1
    }
    return prev
  }, {})
}

/*****************
    TEST CASES
 *****************/
 let str1 = '12333', str2 = '33321'
      str3 = '12', str4 = '132',
      str5 = '312', str6 = '111'

checkPermutation2(str1, str2)
checkPermutation2(str2, str3)
checkPermutation2(str3, str4)
checkPermutation2(str4, str5)
checkPermutation2(str5, str6)
checkPermutation2(str6, str1)
checkPermutation2(str6, str3)
