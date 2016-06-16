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
    this._l = left;
    this._r = right;
  }
}
