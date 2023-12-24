const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strDigit = '' + n;
  let max = 0;

  for (let i = 0; i < strDigit.length; i++) {
    let position = i;
    let newStr = strDigit.slice(0, position) + strDigit.slice(position + 1);
    max = Math.max(max, +newStr);
  }
  return max;

}

module.exports = {
  deleteDigit
};
