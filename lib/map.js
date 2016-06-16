import {Entry} from './entry';
import {Pseudo} from './pseudo';
import {Double} from './double';
import {Single} from './single';

function compare(a, b) {
  if (a === b) {
    return 0;
  }

  return a < b ? -1 : 1;
}

/**
 * An immutable key/value map implemented as a 2-3 tree using path copying upon insertion. Since the map is implemented
 * as a balanced search tree, keys must be comparable.
 *
 * ```js
 * import {Map} from 'uforanderlig';
 * ```
 */
class Map {
  /**
   * Create a new map.
   *
   * @param {Single|Double} root
   * @private
   */
  constructor(root, comparator = compare) {
    this._r = root;
    this._c = comparator;
  }

  /**
   * Return a string representation of this map.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    let q = [this._r];
    let i = [];
    let n;

    while ((n = q.shift())) {
      i[i.length] = `${n._a._k}: ${n._a._v}`;
      q[q.length] = n._l;

      if (n instanceof Double) {
        i[i.length] = `${n._b._k}: ${n._b._v}`;
        q[q.length] = n._m;
      }

      q[q.length] = n._r;
    }

    return i.length ? `Map { ${i.sort(this._c).join(', ')} }` : 'Map {}';
  }
}

/**
 * Create an empty map.
 *
 * @memberof Map
 * @return {Map}
 */
export function empty() {
  return new Map();
}

/**
 * Get the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {Map} map
 * @return {*}
 */
export function get(key, map) {
  return map._r ? map._r.get(key, map._c) : undefined;
}

/**
 * Set the value of a key in a map.
 *
 * @memberof Map
 * @param {String|Number} key
 * @param {*} value
 * @param {Map} map
 * @return {Map}
 */
export function set(key, value, map) {
  let r;

  if (map._r) {
    r = map._r.set(key, value, map._c);

    if (r instanceof Pseudo) {
      r = new Single(r._a, r._l, r._r);
    }
  } else {
    r = new Single(new Entry(key, value));
  }

  return new Map(r, map._c);
}
