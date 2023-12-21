const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let result = [];
  if (!Array.isArray(members)) return false

  members.forEach(member => {
    if (typeof member === 'string') {
      if (isNaN(Number(member))) {
        let memberMod = member.trim();
        result.push(memberMod[0].toUpperCase());
      }
    }
  });

  result.sort();
  result = result.join('');

  if (result.length === 0) return false;

  return result;
}

module.exports = {
  createDreamTeam
};
