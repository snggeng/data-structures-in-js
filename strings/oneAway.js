/*
 There are three types of edits that can be performed on strings:
 insert a character, remove a character, or replace a character.
 Given 2 strings, write a function to check if they are one edit
 (or zero edits) away.

 EXAMPLE
 pale, ple -> true
 pales, pale -> true
 pale, bale -> true
 pale, bake -> false
*/

// insert, remove, replace... so one/none away means that they have the same
// chars, or at most 1 different char
// loop through str1 and add to set. get length1
// loop through str2 and add to same set. get length2
// if length2 - length1 > 1 return false else true

oneAway = (str1, str2) => {
  let mySet = new Set()
  str1.split('').map((elem, i) => {
    return mySet.add(elem)
  })
  let length1 = mySet.size
  console.log('length1', length1, mySet)
  let arr2 = str2.split('').map((elem, i) => {
    return mySet.add(elem)
  })
  let length2 = mySet.size
  console.log('length2', length2, mySet)
  length2-length1 > 1 ? console.log('not one away') : console.log('one away')
}

let s1='pale', s2='ple', s3='pales', s4='bale', s5='bake'

// pale, ple -> true
// pales, pale -> true
// pale, bale -> true
// pale, bake -> false

oneAway(s1, s2)
oneAway(s3, s1)
oneAway(s1, s4)
oneAway(s1, s5)
