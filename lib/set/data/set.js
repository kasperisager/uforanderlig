import {each} from '../each';
import {iterator} from '../iterator';

/**
 * A immutable set implemented on top of a key/value map. Since the set is implemented as a balanced search tree, keys
 * must be comparable.
 *
 * ```js
 * import {Set} from 'uforanderlig';
 * ```
 */
export class Set {
  /**
   * Create a new set.
   *
   * @param {Map} map
   * @private
   */
  constructor(map) {
    this.map = map;
  }

  /**
   * Return a string representation of this set.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    const i = [];

    each(v => {
      i[i.length] = String(v);
    }, this);

    return i.length ? `Set { ${i.join(', ')} }` : 'Set {}';
  }

  [Symbol.iterator]() {
    return iterator(this);
  }
}
