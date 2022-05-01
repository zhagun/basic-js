const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = n.toString().split('').map(el => el = Number(el));
  let num = arr.reduce((total, el) => total + el);
  if (num > 9) { return getSumOfDigits(num); }
  else return num;
}

module.exports = {
  getSumOfDigits
};
