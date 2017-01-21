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
    this.elements = [];

    for (let i = 0, n = elements.length; i < n; i++) {
      this.elements[i] = elements[i];
    }
  }

  /**
   * Return a string representation of this tuple.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    const n = this.elements.length;
    const e = new Array(n);

    for (let i = 0; i < n; i++) {
      e[i] = String(this.elements[i]);
    }

    return e.length ? `(${e.join(', ')})` : '()';
  }

  [Symbol.iterator]() {
    return this.elements[Symbol.iterator]();
  }
}
