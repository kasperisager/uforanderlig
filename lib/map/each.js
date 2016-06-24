import {Double} from './data/double';

/**
 * Loop over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {Map} map
 */
export function each(iteratee, map) {
  if (!map) {
    return;
  }

  function visitor(node) {
    if (!node) {
      return;
    }

    visitor(node._left);
    iteratee(node._a._value, node._a._key);

    if (node instanceof Double) {
      visitor(node._middle);
      iteratee(node._b._value, node._b._key);
    }

    visitor(node._right);
  }

  visitor(map._root);
}
