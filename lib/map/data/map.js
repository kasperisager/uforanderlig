import {each} from '../each';
import {iterator} from '../iterator';

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
export class Map {
  /**
   * Create a new map.
   *
   * @param {Single|Double} root
   * @private
   */
  constructor(root, comparator = compare) {
    this.root = root;
    this.comparator = comparator;
  }

  /**
   * Return a string representation of this map.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    const i = [];

    each((value, key) => {
      i[i.length] = `${String(key)}: ${String(value)}`;
    }, this);

    return i.length ? `Map { ${i.join(', ')} }` : 'Map {}';
  }

  [Symbol.iterator]() {
    return iterator(this);
  }
}
