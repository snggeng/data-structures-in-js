/*
 * Write a method to replace all spaces in a string with '%20'.
 * You may assume that the tring has sufficient space at the end
 * to hold the additional characters, and that you are given the
 * 'true' legth of the string.
 * E.G. Input: 'Mr John Smith     ', 13
 *      Output: 'Mr%20John%20Smith'
 */

 urlify = (str, len) => {
   // trim string first
   url = str.trim()
   // check len to see if there are additional whitespaces in between
   if (url.length !== len) {
     url = str.split(' ').filter(e => String(e).trim()).join(' ')
   }
   // catch whitespace using a replace
   url = url.replace(/\s/g, '%20')
   // or
   // url = url.split(' ').join('%20')
   console.log(url)
   return url
 }

 urlify('Mr John Smith     ', 13)
 urlify('      Goog       hi     no      ', 10)
