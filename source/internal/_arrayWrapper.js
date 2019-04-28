import _isArray from './_isArray';

/**
 * Wraps an object into array if it not an array.
 *
 * @private
 * @param {*} val The object to wrap.
 * @return {Array} An array
 * @example
 *
 *      _arrayWrapper([]); //=> []
 *      _arrayWrapper('key'); //=> ['key']
 *      _arrayWrapper(100); //=> [100]
 *      _arrayWrapper({a: 1}); //=> [{a: 1}]
 *
 */

export default function _arrayWrapper(val) {
  return _isArray(val) ? val : [val];
}
