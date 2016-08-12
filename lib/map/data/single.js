import {Entry} from './entry';
import {Pseudo} from './pseudo';
import {Double} from './double';
import {Leaf, LEAF} from './leaf';

/**
 * A single node.
 *
 * @private
 */
export class Single {
  /**
   * @private
   */
  constructor(a, left, right) {
    this.a = a;
    this.left = left;
    this.right = right;
  }

  /**
   * @private
   */
  get(key, comparator) {
    const l = this.left;
    const r = this.right;

    const ca = comparator(key, this.a.key);

    if (ca === 0) {
      return this.a.value;
    }

    if (l && ca < 0) {
      return l.get(key, comparator);
    }

    if (r && ca > 0) {
      return r.get(key, comparator);
    }
  }

  /**
   * @private
   */
  set(key, value, comparator) {
    const a = this.a;
    const l = this.left;
    const r = this.right;
    const e = new Entry(key, value);

    const ca = comparator(key, a.key);

    if (ca === 0) {
      if (value === a.value) {
        return this;
      }

      return new Single(e, l, r);
    }

    if (ca < 0) {
      if (l instanceof Leaf) {
        return new Double(e, a, LEAF, LEAF, LEAF);
      }

      const i = l.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(i.a, a, i.left, i.right, r);
      }

      if (i === l) {
        return this;
      }

      return new Single(a, i, r);
    }

    if (ca > 0) {
      if (r instanceof Leaf) {
        return new Double(a, e, LEAF, LEAF, LEAF);
      }

      const i = r.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Double(a, i.a, l, i.left, i.right);
      }

      if (i === r) {
        return this;
      }

      return new Single(a, l, i);
    }
  }
}
