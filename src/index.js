
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  let arr = []

  matrix.forEach( (item, index) => {
    if ( index % 2 !== 0) {
      item.reverse();
    }
    
    item.forEach( elem => {
      arr.push(elem);      
    });
  });

  return arr;
}
