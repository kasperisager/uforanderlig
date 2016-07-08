/**
 * A node in a linked list.
 *
 * @private
 */
export class Node {
  /**
   * Create a new node.
   *
   * @param {*} item
   * @param {Node} next
   * @private
   */
  constructor(item, next) {
    this.item = item;
    this.next = next;
  }
}
