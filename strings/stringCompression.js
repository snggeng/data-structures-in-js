/*
 Implement a method to perform basic string compression using the counts of
 repeated characters. For example, the string aabcccccaaa would become a2b1c5a3.
 If the "compressed" string would not become smaller than the original string,
 your method should return the original string. Assume the string has only uppercase
 and lowercase letters
*/

let stringCompression = (str) => {
  let arr = str.replace(/\s/g, '').split('') //remove whitespaces
  let count = 1
  let longerThanOriginal = false
  let compressedString = ''
  arr.reduce((acc, curr, i) => { // O(N)
        console.log(acc, curr)
    if (acc === curr) {
      count++
      longerThanOriginal = true
    } else if (acc) { // acc is undefined at the start
      compressedString += acc + count
      count = 1
    }
    if (i === str.length-1) compressedString += acc + count
    return acc = curr
  }, '')
  console.log(longerThanOriginal ? compressedString : str)
  return longerThanOriginal ? compressedString : str
}

/* TEST CASES */
str1 = 'aabcccccaaa'
str2 = 'aabbcddddeeeeaaddee'
str3 = 'abcde'

stringCompression(str1)
stringCompression(str3)
