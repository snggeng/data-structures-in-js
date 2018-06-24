/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * Example:
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // catch edge case
    if (nums.length <=1) return false;
    // hashmap to store complements
    let complements = {}
    // loop through in one pass to find matching pair
    for (let i=0; i < nums.length; i++) {
        let num = nums[i];
        if (num in complements) {
            return [complements[num], i];
        } else {
            complements[target - num] = i;
        }
    }
};



