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
    let n = this._head;
    let i = [];

    while (n) {
      i[i.length] = n._item.toString();
      n = n._next;
    }

    return i.length ? `List [ ${i.join(', ')} ]` : 'List []';
  }
}
