const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const season = {
    'spring': [2, 3, 4],
    'summer': [5, 6, 7],
    'autumn': [8, 9, 10],
    'winter': [11, 0, 1],
  }

  if (!date) return "Unable to determine the time of year!";

  try {
    if (Object.getOwnPropertyNames(date).length > 0)
      throw new Error('Invalid date!')
    for (const key in season) {
      if (season[key].includes(date.getMonth()))
        return key;
    }
  }

  catch (err) {
    throw new Error('Invalid date!');
  }

}

module.exports = {
  getSeason
};
