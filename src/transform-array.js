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

  console.log(arr);

  console.log(arr);

  let result = [];
  let discardPointer = undefined;

  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        result.push(arr[i + 1]);
      }
      continue
    }
    if (arr[i] === '--double-prev') {
      if (arr[i - 1] !== undefined) {
        if (discardPointer != i - 1) {
          result.push(arr[i - 1]);
        }
      }
      continue
    }
    if (arr[i] === '--discard-next') {
      i++;
      discardPointer = i;
      continue
    }
    if (arr[i] === '--discard-prev') {
      if (discardPointer !== i - 1) {
        result.pop();
      }
      discardPointer = i - 1;
      continue
    }

    result.push(arr[i]);
  }
  return result;
}

module.exports = {
  transform
};
