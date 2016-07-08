import {head} from '../head';
import {tail} from '../tail';

/**
 * A list iterator.
 *
 * @private
 */
export class ListIterator {
  /**
   * @param {List} list
   * @private
   */
  constructor(list) {
    this.list = list;
  }

  /**
   * @return {Object}
   * @private
   */
  next() {
    const item = head(this.list);
    this.list = tail(this.list);

    return {
      value: item,
      done: item === null
    };
  }
}
