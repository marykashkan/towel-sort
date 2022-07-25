
// You should implement your task here.

module.exports = function towelSort (matrix) {
  newMatrix = [];
  if (!matrix) {
    return newMatrix;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        newMatrix = newMatrix.concat(matrix[i]);
      } else if (i % 2 !== 0) {
        newMatrix = newMatrix.concat(matrix[i].reverse());
      };      
    };
    return newMatrix;
  };  
  
}
