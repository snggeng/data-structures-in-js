/*
 Write a method to check if a given string is a permutation of a palindrome
 i.e. taco cat, atco cta, cato tac
 ignore whitespaces
 a given string may not be a palindrom, but can form one:
 i.e. taccoat
 In order for a string to be a palindrome,
 if it has even number of chars, all chars must be pairs (x2)
 if it has odd number of chars, all chars except one are pairs
*/


// if length=even, all stored chars should have even count
// if length=odd, all stored chars except 1 should have event count
// iterate through map of arr to check count O(N)
// return false if anomaly found
// else return true

/* SOLUTION */
palindromePermutation = (str) => {
  arr = str.replace(/\s/g, '').split('') // remove whitespaces & get char array
  // store each char in a map and count instances O(N)
  let map = arrayToObject(arr)
  let isPalindrome = false
  let count = 0
  console.log(map)
  // check if arr length is odd or even
  arr.length % 2 === 0 ? // O(N)
  // even
  Object.keys(map).forEach((key, index) => {
    map[key] % 2 === 0 ? isPalindrome = true : isPalindrome = false
  }) :
  // odd
  Object.keys(map).forEach((key, index) => {
    if (count > 2) return // not palindrome
    if (map[key] % 2 === 0) {
      isPalindrome = true
    } else {
      count++
      isPalindrome = false
    }
  })
  if (count === 1) {isPalindrome = true}
  return console.log('count: ', count, 'is palindrome? ', isPalindrome)
}

palindromePermutation2 = (str) => {
  arr = str.replace(/\s/g, '').split('') // remove whitespaces & get char array
  // store each char in a map and count instances O(N)
  let map = arrayToObject(arr)
  Object.keys(map).forEach((key, index) => {
    
  })
}

/* HELPER FUNCTIONS */
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

class Map {
  constructor(val, unique) {
    this.value = val
    this.isOnlyOdd = unique
  }

  get val() {
  return this.values()
  }

  values() {
    return this.value
  }
}

let x = new Map(2, true)
console.log(x.isOnlyOdd)


/* TEST CASES */
str1 = '        taco       cat' // true
str2 = '    d   d    d    d'    // true
str3 = 'abscdsd'                // false
str4 = 'aaddccvvffrreettjgj'    // true
str5 = '   abccbasd'            // false


palindromePermutation(str1)
palindromePermutation(str2)
palindromePermutation(str3)
palindromePermutation(str4)
palindromePermutation(str5)
