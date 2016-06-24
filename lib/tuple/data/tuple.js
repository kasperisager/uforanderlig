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
    this._elements = elements;

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
    const e = [];

    for (let i = 0, n = this._elements.length; i < n; i++) {
      e[i] = String(this._elements[i]);
    }

    return e.length ? `(${e.join(', ')})` : '()';
  }
}
