import {Leaf} from './leaf';

/**
 * A map iterator.
 *
 * @private
 */
export class MapIterator {
  /**
   * @param {Map} map
   * @private
   */
  constructor(map) {
    this.queue = [];
    this.enqueue(map.root);
  }

  /**
   * @param {Single|Double} node
   * @private
   */
  enqueue(node) {
    while (node) {
      this.queue.push(node);
      node = node.left;
    }
  }

  /**
   * @return {Object}
   * @private
   */
  next() {
    if (this.queue.length === 0) {
      return {done: true};
    }

    const node = this.queue.pop();

    if (node instanceof Leaf) {
      return this.next();
    }

    if (node.key) {
      return {
        value: [node.value, node.key],
        done: false
      };
    }

    if (node.right) {
      this.enqueue(node.right);
    }

    if (node.b) {
      this.queue.push(node.b);
    }

    if (node.middle) {
      this.enqueue(node.middle);
    }

    return {
      value: [node.a.value, node.a.key],
      done: false
    };
  }
}
