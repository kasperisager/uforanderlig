/**
 * An immutable tuple.
 *
 * ```js
 * import {Tuple} from 'uforanderlig';
 * ```
 */
export class Tuple {
  /**
   * Create a new tuple.
   *
   * @param {Array} elements
   * @private
   */
  constructor(elements) {
    this._e = elements;

    for (let i = 0, n = elements.length; i < n; i++) {
      this[i] = elements[i];
    }
  }

  /**
   * Return a string representation of this tuple.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    return this._e.length ? `(${this._e.join(', ')})` : '()';
  }
}
