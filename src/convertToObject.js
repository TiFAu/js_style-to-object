'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const initialStyles = {};

  return declarations.reduce((resultObject, currentString) => {
    const [key, value] = currentString.split(':', 2);
    const trimmedKey = key != null ? key.trim() : null;
    const trimmedValue = value != null ? value.trim() : null;

    if (!trimmedKey || !trimmedValue) {
      return resultObject;
    }

    if (
      (trimmedKey && trimmedValue !== undefined && trimmedValue !== null) ||
      (trimmedValue !== undefined &&
        trimmedValue !== null &&
        trimmedValue !== '')
    ) {
      resultObject[trimmedKey] = trimmedValue;
    }

    return resultObject;
  }, initialStyles);
}

module.exports = convertToObject;
