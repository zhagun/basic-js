const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = [];
  
  if (options.separator === undefined) {
      options.separator = '+';
  }

  if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
  }

  if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }

  if (options.addition === undefined) {
      options.additionRepeatTimes = '';
  }

  for (let i = 0; i < options.repeatTimes; i++) {
    newStr += str;

    for (let j = 0; j < options.additionRepeatTimes; j++) {
        newStr += options.addition;

        if (j < (options.additionRepeatTimes - 1)) {
            newStr += options.additionSeparator;
        }
    } 

    if (i < (options.repeatTimes - 1)) {
        newStr +=  options.separator;
    } 
  }

  return newStr;
}

module.exports = {
  repeater
};
