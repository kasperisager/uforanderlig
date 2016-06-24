/**
 * A key/value entry in a map.
 *
 * @private
 */
export class Entry {
  /**
   * Create a new entry.
   *
   * @param {String|Number} key
   * @param {*} value
   * @private
   */
  constructor(key, value) {
    this._key = key;
    this._value = value;
  }
}
