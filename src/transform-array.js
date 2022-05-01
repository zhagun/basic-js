const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--double-next":
        arr[i+1] !== undefined ? arr2.push(arr[i+1]) : '';
        break;

      case '--double-prev':
        arr[i-1] !== undefined && arr[i-2] != "--discard-next" ? arr2.push(arr[i-1]) : '';
        break;

      case "--discard-next":
        i++;
        break;
        
      case "--discard-prev":
        if (arr[i-2] != "--discard-next") {
          arr2.pop();
        }
        break;
      
      default:
        arr2.push(arr[i]);
    }
  }
  return arr2;
}

module.exports = {
  transform
};
