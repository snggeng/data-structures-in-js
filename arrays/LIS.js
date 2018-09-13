/*
 * Longest Increasing Subsequence (LIS)
 * Leetcode: https://leetcode.com/problems/longest-increasing-subsequence
 * Write a function that returns the LIS within a given array
 * e.g. nums = [1, 2, 4, 5, 3, 6, -1, 7, -2, 0, 10]
 * LIS(nums) = 7    // [1, 2, 4, 5, 6, 7, 10]
 * (1) Bruteforce: O(N^N) find length all possible Subsequence
 * combinations and get max
 * (2) DP: O(N^2) saving the max length of each index in array
 * and tracking the smallest number to know when to begin a new
 * subsequence
 * (3) DP with Binary Search: O(nLogn)
 */

// DP solution: O(N^2)
const LIS = (nums) => {
  if (nums.length <= 1) return nums.length
  let smallest = Number.MIN_VALUE
  let dp = new Array(nums.length).fill(1) // dp array to store subsequence lengths
  // loop through list
  for (let i=0; i < nums.length; i++) {
    // all past elements in array
    for (let j=0; j < i; j++) {
      // count smaller indices
      if (nums[j] < nums[i]) {
        // check if at index i, there exists a new subsequence
        // that exceeds the current max count in our dp array
        if (dp[j]+1 > dp[i]) {
          // update dp array
          dp[i] = dp[j]+1
        }
      }
    }
  }
  // get max count from dp array
  return dp.reduce((a, b) => Math.max(a,b))
}

// DP + Binary Search solution: O(nLogn)
// cont LISbinary = (arr) => {
  
// }

let list = [1, 2, 4, 5, 3, 6, -1, 7, -2, 0, 10]
let list2 = [-100, -99, -8, -7, -4, -1, 5, 4, 3, 2, 1, 0, 10, 40]
console.log(LIS(list))
console.log(LIS(list2))
