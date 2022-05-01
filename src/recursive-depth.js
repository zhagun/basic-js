const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let dp = 0;
    arr.forEach((val) => {
      if (Array.isArray(val)) {
        dp = Math.max(this.calculateDepth(val), dp);
      }
    })
    return dp + 1;
  }
}

module.exports = {
  DepthCalculator
};
