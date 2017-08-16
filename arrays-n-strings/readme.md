# Arrays and Strings

```
let numbers = [1,2,3,4,5]
/* iterating through arrays using @@iterator */
let iterator = numbers[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())

// { value: 1, done: false }
// { value: 2, done: false }

/* retrieve iterators from array using entries() */
let entries = numbers.entries()
console.log(
  entries.next(),
  entries.next()
)
// { value: [ 0, 1 ], done: false }
// { value: [ 1, 2 ], done: false }

/* retrieving keys of an array */

// keys() method returns @@iterator which contains the keys of the array, instead of values (default)

let aKeys = numbers.keys()
console.log(
  aKeys.next(),
  aKeys.next(),
  aKeys.next(),
  aKeys.next(),
  aKeys.next()
)

/* retrieving values of an array  */

let aValues = numbers.values()
console.log(
  aValues.next(),
  aValues.next(),
  aValues.next()
)
```
