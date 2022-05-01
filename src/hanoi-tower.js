const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disks, turnsSpeed) {
  let countSteps =(Math.pow(2, disks) - 1) ;
  let res = Math.floor(countSteps / (turnsSpeed / 3600));

  let obj = {
    turns: countSteps,
    seconds: res
  }

  return obj;
}

module.exports = {
  calculateHanoi
};
