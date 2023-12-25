const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i++) {
    result += Math.min(s1.split(alphabet[i]).length - 1, s2.split(alphabet[i]).length - 1);
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
