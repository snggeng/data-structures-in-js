/*
  Given an image represented by an NxN matrix, where each pixel in the image
  is 4 bytes, write a method to rotate the image by 90 degrees.
  Can you do this in place?

  matrix (5x5) = rotate left by 90deg
  [[0,0,0,0,0],               [[0,1,2,3,4],
   [1,1,1,1,1],       =>       [0,1,2,3,4],
   [2,2,2,2,2],                [0,1,2,3,4],
   [3,3,3,3,3]                 [0,1,2,3,4],
   [4,4,4,4,4]]                [0,1,2,3,4]]

   rotate by 90 degrees to left or right? say we rotate left
*/


// O(N^2)
let rotateMatrix = (matrix) => {
  // initialize empty array
  let rotatedMatrix = [...Array(matrix.length).keys()].map(i => Array(matrix.length));
  // rotate left by 90 deg
  matrix.forEach((e, i) => {
    e.forEach((el, j) => {
      rotatedMatrix[j][i] = matrix[i][matrix.length-1-j]
    })
  })
  console.log(rotatedMatrix)
}

// O(N^2) in place?
let rotateMatrix2 = (matrix) => {
  // rotate left by 90 deg
  let n = matrix.length
  for (let i = 0; i < n/2; i++) {
    let first = i // 0
    let last = n - 1 - i // 4 - 1 - 0 = 3
    for (let j=first; j < last; j++) {
      let offset = j - first // 0 - 0 = 0
      let top = matrix[first][j] // 
      // left -> top
      matrix[first][j] = matrix[last-offset][first]
      // bottom -> left
      matrix[last-offset][first] = matrix[last][last-offset]
      // right -> bottom
      matrix[last][last-offset] = matrix[j][last]
      // top -> right
      matrix[j][last] = top
    }
  }
  console.log(matrix)
}

/* TEST CASES */

m1 = [[0,0,0,0,0], [1,1,1,1,1], [2,2,2,2,2], [3,3,3,3,3], [4,4,4,4,4]]
m2 = [[1,2,3], [4,5,6], [7,8,9]]
m3 = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]

rotateMatrix2(m1)
rotateMatrix2(m2)
rotateMatrix2(m3)
