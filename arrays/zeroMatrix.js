/*
  Write an algorithm such that if an element in an MxN matrix is 0,
  its entire row and column are set to 0. What if there is more than one 0?

  [[1,2,3,4,5],            [[1,2,3,0,5],
   [4,4,3,0,3]      =>      [0,0,0,0,0],
   [9,4,3,4,3]]             [9,4,3,0,3]]

   loop through matrix[i][j] to find 0
    if 0 exists, get index of 0 location and reassign values in column-place
    and row-place
    if 0 does not exist, return matrix
*/

// O(N^3) solution :'(
let zeroMatrix = (matrix) => {
  let row = [], col = []
  matrix.forEach((arr, i) => { // O(N^2)
    arr.forEach((item, j) => {
      item === 0 ? (row.push(i), col.push(j), console.log(row, col)) : null
    })
  })
  console.log('row: ', row, 'col: ', col)
  matrix.forEach((arr, i) => { // O(N^2)
    arr.forEach((item, j) => {
      row.includes(i) || col.includes(j) ? matrix[i][j]=0 : null //O(N)
    })
  })
  matrix.forEach(r => console.log(r))
}

let m1 = [[1,2,3,4,5], [4,5,6,8,8], [1,2,3,0,2]]
let m2 = [[1,2,3,4,5], [4,5,6,8,8], [1,2,3,0,2], [0,2,3,4,2], [2,3,4,1,2]]


zeroMatrix(m1)
zeroMatrix(m2)
