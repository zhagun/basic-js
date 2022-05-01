const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = [];
  let arr3 = [];
  let i = 0;

  arr.forEach((el, i) => {
    if (el === -1) arr2.push(i);
  });

  arr3 = arr.filter(el => el !== -1).sort((a, b) => a - b);
  while (arr2.length !== 0) {
    arr3.splice(arr2[0], 0, -1);
    arr2.shift();
  }
  
  return arr3;
}

module.exports = {
  sortByHeight
};
