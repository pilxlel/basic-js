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
  let modStr = '' + str;
  let result = '';
  let additionResult = '';

  //задает количество повторений строки;
  let repeatTimes;
  'repeatTimes' in options ? repeatTimes = options.repeatTimes : repeatTimes = 0;

  //строка, разделяющая повторы строки;
  let separator;
  'separator' in options ? separator = options.separator : separator = '+';

  const separatorLength = separator.length;

  //дополнительная строка, которая будет добавлена к каждому повторению строки;
  let addition;
  'addition' in options ? addition = '' + options.addition : addition = '';

  //задает количество повторений дополнения;
  let additionRepeatTimes;
  'additionRepeatTimes' in options ? additionRepeatTimes = options.additionRepeatTimes : additionRepeatTimes = 0;

  //строка, разделяющая повторы дополнения.
  let additionSeparator;
  'additionSeparator' in options ? additionSeparator = options.additionSeparator : additionSeparator = '|'

  const additionSeparatorLength = additionSeparator.length;
  let isFirstCount = true;

  if (repeatTimes > 0 && additionRepeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      if (additionRepeatTimes > 0 && isFirstCount) {
        for (let j = 0; j < additionRepeatTimes; j++) {
          additionResult += addition + additionSeparator;
        }
        isFirstCount = false;
        additionResult = additionResult.slice(0, -additionSeparatorLength);
      }
      result += modStr + additionResult + separator;
    }
    return result.slice(0, -separatorLength);
  }

  if (repeatTimes === 0 && additionRepeatTimes === 0) {
    result += modStr + addition;
    return result
  }

  if (repeatTimes > 0 && additionRepeatTimes === 0) {
    for (let i = 0; i < repeatTimes; i++) {
      result += modStr + additionResult + separator;
    }
    return result.slice(0, -separatorLength);
  }
}

module.exports = {
  repeater
};
