// given an array of numbers and a number n, rearrange the sequence of the
// numbers based on the number n:
// all elements < n should go to its left
// all elements >= n should go to its right
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
  while (start != end && start < arr.length) {
    //console.log(start, end)
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
  // sort pivot into middle
  start = 0
  end = arr.length - 1
  n += 1
  while (start != end && start < arr.length) {
    //console.log(start, end)
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
  return arr
}

/*
 * TEST CASES
 */

let nums1 = [4,2,3,5,2,10,204,2,3,10,29,20,10]
let n = 10
console.log(`input: ${nums1}`)
console.log('expected output: [4,2,3,5,2,2,3,10,10,10,204,29,20] \n')

console.log(dutchNationalFlag(nums1, n))
