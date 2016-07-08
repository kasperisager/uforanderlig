import {List} from '../..';

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
    this.front = front;
    this.back = back;
  }

  /**
   * Return a string representation of this deque.
   *
   * @return {String}
   * @ignore
   */
  toString() {
    const i = [];

    List.each(e => {
      i[i.length] = String(e);
    }, this.front);

    List.each(e => {
      i[i.length] = String(e);
    }, List.reverse(this.back));

    return i.length ? `Deque [ ${i.join(', ')} ]` : 'Deque []';
  }
}
