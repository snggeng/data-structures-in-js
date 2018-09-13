var bigInt = require('big-integer')
/*
 Integer Multiplication
 '12344536574574621313' * '9848938429834234242342'
 '654321' * '123456'
 --> (654000 + 321) * (123000 + 456)
 -->

 int n = max(number of digits in a, number of digits in b)
 if(n == 1) {
     return a.intValue() * b.intValue();
 } else {
     BigInteger aR = bottom n/2 digits of a;
     BigInteger aL = top remaining digits of a;
     BigInteger bR = bottom n/2 digits of b;
     BigInteger bL = top remaining digits of b;
     BigInteger x1 = Multiply(aL, bL);
     BigInteger x2 = Multiply(aR, bR);
     BigInteger x3 = Multiply(aL + bL, aR + bR);
     return x1 * pow(10, n) + (x3 - x1 - x2) * pow(10, n / 2) + x2;
 }
*/

const multiply = (a, b) => {
    let n = Math.min(a.toString().length, b.toString().length)
    //console.log('n: ', n)
    if (n === 1) {
      return bigInt(a.toString()) * bigInt(b.toString())
    } else {
      let aR = bigInt(a.toString().substr(n/2))
      let aL = bigInt(a.toString().substr(0, n/2))
      let bR = bigInt(b.toString().substr(n/2))
      let bL = bigInt(b.toString().substr(0, n/2))
      let x1 = multiply(aL, bL);
      let x2 = multiply(aR, bR);
      let x3 = multiply((aL + bL), (aR + bR));
      //console.log(x1, x2, x3)
      return (x1 * Math.pow(10, n) + (x3 - x1 - x2) * Math.pow(10, n / 2) + x2)
    }
}

let x = multiply(1123431, 123131)
console.log(x)
