// given an array of numbers and a number n, rearrange the sequence of the
// numbers based on the number n:
// all elements < n should go to its left
// all elements >= n should go to its right
/*
const dutchNationalFlag = (arr, n) => {
  let start = 0
  let end = arr.length - 1

  // helper to swap
  const swap = (a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  // sort to smaller to left
  // loop array until 2 pointers converge
  let shiftSmallerLeft = (start, end, n) => {
    while (start != end && start < arr.length) {
      console.log(start, end)
      if (arr[start] >= n && arr[end] < n) {
        console.log(`swap: ${arr[start]} ${arr[end]}`)
        swap(start, end)
      } else if (arr[start] < n) {
        console.log('start moving')
        start++
      } else if (arr[end] >= n) {
        console.log('end moving')
        end--
      }
    }
  }
  shiftSmallerLeft(start, end, n)
  // sort pivot i.e. n into middle
  start = 0
  end = arr.length - 1
  shiftSmallerLeft(start, end, n+1)

  return arr
}
*/

const dutchNationalFlag = (pivotIndex, arr) => {
  let pivot = arr[pivotIndex];
  // use three pointers to partition placement of numbers
  let smaller = 0;
  let equal = 0;
  let larger = arr.length;

  // helper to swap
  const swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  // iterate through array and swap numbers into partition
  while (equal < larger) {
    if (arr[equal] < pivot) {
      // console.log(`equal: ${arr[equal]} < pivot ${pivot}`)
      swap(arr, smaller++, equal++);
    } else if (arr[equal] === pivot) {
      // console.log(`equal: ${arr[equal]} === pivot ${pivot}`)
      ++equal;
    } else {
      // console.log(`equal: ${arr[equal]} > pivot ${pivot}`)
      // equal > pivotIndex
      swap(arr, equal, --larger);
    }
    // console.log(arr)
  }
  return arr;
}

/*
 * TEST CASES
 */

let nums1 = [4,2,3,5,2,10,204,2,3,10,29,20,10]
let n = 5
console.log(`input: ${nums1}`)
console.log('expected output: [4,2,3,5,2,2,3,10,10,10,204,29,20] \n')

console.log(dutchNationalFlag(n, nums1))
console.log(nums1.length, count);
