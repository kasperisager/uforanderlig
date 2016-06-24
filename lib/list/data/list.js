import {each} from '../each';

/**
 * An immutable forward-linked list.
 *
 * ```js
 * import {List} from 'uforanderlig';
 * ```
 */
export class List {
  /**
   * Create a new list.
   *
   * @param {Node} head
   * @private
   */
  constructor(head) {
    this._head = head;
  }

  /**
   * Return a string representation of this list.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    const i = [];

    each(e => {
      i[i.length] = String(e);
    }, this);

    return i.length ? `List [ ${i.join(', ')} ]` : 'List []';
  }
}
