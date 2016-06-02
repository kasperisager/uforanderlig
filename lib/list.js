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
 * A node in a linked list.
 *
 * @private
 */
class Node {
  /**
   * Create a new node.
   *
   * @param {*} item
   * @param {Node} next
   * @private
   */
  constructor(item, next) {
    this._item = item;
    this._next = next;
  }
}

/**
 * Create an empty list.
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
