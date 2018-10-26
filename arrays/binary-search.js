'use strict'

const binarySearch = (arr, l, r, x) => {
  if (r >= l) {
	// get middle
	let mid = l + (r - 1) / 2
	// if x is found
	if (arr[mid] === x){
		return mid
	} else if (arr[mid] > x) {
		// middle > x means that x is smaller than middle
		// use the left subarray
		return binarySearch(arr, l, mid-1, x)
	} else {
		return binarySearch(arr, mid+1, r, x);
	}
  } else {
    return -1
  }
}

const testData = [1,2,3,4,5,6,7,7,8,9,10,22,34,50]

console.log(binarySearch(testData, 0, testData.length-1, 6))
console.log(binarySearch(testData, 0, testData.length-1, 7))
console.log(binarySearch(testData, 0, testData.length-1, 8))
console.log(binarySearch(testData, 0, testData.length-1, 11))