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
// O(N) Using Hash Set
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

/*****************
    TEST CASES
 *****************/
 let str1 = '123', str2 = '321'
      str3 = '12', str4 = '132',
      str5 = '312', str6 = '111'

checkPermutation(str1, str2)
checkPermutation(str2, str3)
checkPermutation(str3, str4)
checkPermutation(str4, str5)
checkPermutation1(str5, str6)
checkPermutation1(str6, str1)
checkPermutation1(str6, str3)
