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
    this._m = map;
  }
}
