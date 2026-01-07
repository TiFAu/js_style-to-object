'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultArr = sourceString.split(';');
  const startValue = {};

  return resultArr.reduce((resultObject, currentString) => {
    const [key, value] = currentString.split(':');
    const trimmedKey = key != null ? key.trim() : null;
    const trimmedValue = value != null ? value.trim() : null;

    if (!trimmedKey || !trimmedValue) {
      return resultObject;
    }

    resultObject[trimmedKey] = trimmedValue;

    return resultObject;
  }, startValue);
}

module.exports = convertToObject;
