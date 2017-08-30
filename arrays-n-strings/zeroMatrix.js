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

let zeroMatrix = (matrix) => {
  let row = '', col = ''
  matrix.forEach((arr, i) => { // O(N^2)
    arr.forEach((item, j) => {
      item === 0 ? (row=i, col=j, console.log(row, col)) : console.log('none')
    })
  })
  console.log('row: ', row, 'col: ', col)
  matrix.forEach((arr, i) => { // O(N^2)
    arr.forEach((item, j) => {
      i===row || j===col ? matrix[i][j]=0 : console.log('none')
    })
  })
  console.log(matrix)
}

let m1 = [[1,2,3,4,5], [4,5,6,8,8], [1,2,3,0,2]]

zeroMatrix(m1)
