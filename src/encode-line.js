const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strArr = str.split('');
  let j = 1
  if (str === '') return str;
  else
  return strArr.reduce((total, el, i, arr) => {
    if (el !== arr[i-1] && el !== arr[i+1]) {
      total += `${el}`
    }
    if (el === arr[i-1]) {
      j += 1;
      if (el !== arr[i+1]) total += `${j}${el}`
    }
    else {
      j = 1;
    }

    return total
  }, []);
}

module.exports = {
  encodeLine
};
