/**
 * Given a string, find the length of the longest substring without repeating characters.
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // create sliding window to track maxlength
    // variables: maxLen, index of starting char to subtract by, dict to store char index
    let dict = {};
    let maxLen = 0, start = -1;
    for (let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        if (dict[current] > start) {
            start = dict[current];
        }
        // store index of current char
        dict[current] = i;
        // get maxLen
        maxLen = Math.max(maxLen, i - start);
    }
    return maxLen;
};
