/**
 * Get an element of a tuple.
 *
 * @memberof Tuple
 * @param {Number} index
 * @param {Tuple} tuple
 * @return {*}
 */
export function at(index, tuple) {
  return tuple._e[index];
}
