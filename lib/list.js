import {Node} from './node';

/**
 * An immutable forward linked list.
 *
 * ```js
 * import {List} from 'uforanderlig';
 * ```
 */
class List {
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

/**
 * Create an empty list.
 *
 * @example
 * const l = List.empty();
 *
 * @memberof List
 * @return {List}
 */
export function empty() {
  return new List();
}

/**
 * Add an item to the front of a list.
 *
 * @example
 * const l1 = List.empty();
 * const l2 = List.add(1, l2);
 * const l3 = List.add(2, l3);
 *
 * @memberof List
 * @param {*} item
 * @param {List} list
 * @return {List}
 */
export function add(item, list) {
  if (item === undefined || item === null) {
    return list;
  }

  return new List(new Node(item, list._head));
}

/**
 * Get the head of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.head(l);
 * // => 3
 *
 * @memberof List
 * @param {List} list
 * @return {*}
 */
export function head(list) {
  if (!list || !list._head) {
    return null;
  }

  return list._head._item;
}

/**
 * Get the tail of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.tail(l);
 * // => List [ 2, 1 ]
 *
 * @memberof List
 * @param {List} list
 * @return {List}
 */
export function tail(list) {
  if (!list || !list._head) {
    return list;
  }

  return new List(list._head._next);
}

/**
 * Get the size of a list.
 *
 * @example
 * let l = List.empty();
 * l = List.add(1, l);
 * l = List.add(2, l);
 * l = List.add(3, l);
 * List.size(l);
 * // => 3
 *
 * @memberof List
 * @param {List} list
 * @return {Number}
 */
export function size(list) {
  let s = 0;
  let n = list._head;

  while (n) {
    s++;
    n = n._next;
  }

  return s;
}
