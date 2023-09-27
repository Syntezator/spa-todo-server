/**
 * @function partial
 * @param {Object} func
 * @param {Array} args
 * @returns {Object}
 */

export const partial = (func, ...args) => func.bind(null, ...args);
