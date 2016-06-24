import {Double} from './data/double';

/**
 * Loop over the entries of a map.
 *
 * @memberof Map
 * @param {Function} iteratee
 * @param {Map} map
 */
export function each(iteratee, map) {
  if (!map || !map._r) {
    return;
  }

  function visitor(node) {
    if (!node) {
      return;
    }

    visitor(node._l);
    iteratee(node._a._v, node._a._k);

    if (node instanceof Double) {
      visitor(node._m);
      iteratee(node._b._v, node._b._k);
    }

    visitor(node._r);
  }

  visitor(map._r);
}
