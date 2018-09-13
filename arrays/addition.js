/**
 * Given two arrays that contain a sequence of numbers that represent a whole number,
 * simulate addition and return the result as an array.
 * inputs: [1,3,0], [3.2,1]
 * output: [4,5,1]
 * constraints: no conversion to int, use O(n) space
 */

 const add = (a, b) => {
   return a + b;
 }

 const checkCarry = (res) => res > 9 ? 1 : 0;

 const addition = (num1, num2) => {
   // determine larger number
   let largerN = num1.length > num2.length ? num1 : num2;
   // array to return
   let result = [];
   // carryover value
   let carry = 0;

   // start addition in reverse
   for (let i = 1; i <= largerN.length; i++) {
    // add numbers
    let res = add(num1[num1.length-i], num2[num2.length-i]) + carry;
    // check if res >= 10
    carry = checkCarry(res);
    // add to beginning of array
    carry ? 
      result.unshift(res - 10) : // remainder
      result.unshift(res)
   }
   return result;
 }

 console.log(addition([4,5,7], [2,6,9]));
 console.log(457+269);
 console.log(addition([4,5,7,5,2,3,1,3], [2,6,9,9,2,9,2,9]));
 console.log(45752313+26992929);
 console.log(addition([-4,5,7], [2,6,9]));
 console.log(-457+269);