/**
 * A pseudo node.
 *
 * @private
 */
export class Pseudo {
  /**
   * @private
   */
  constructor(entry, left, right) {
    this._a = entry;
    this._left = left;
    this._right = right;
  }
}
