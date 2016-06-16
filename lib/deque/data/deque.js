/**
 * An immutable deque implemented as two forward-linked lists.
 *
 * ```js
 * import {Deque} from 'uforanderlig';
 * ```
 */
export class Deque {
  /**
   * Create a new deque.
   *
   * @param {List} front
   * @param {List} back
   * @private
   */
  constructor(front, back) {
    this._front = front;
    this._back = back;
  }
}
