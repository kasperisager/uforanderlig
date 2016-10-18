import {Entry} from './entry';
import {Pseudo} from './pseudo';
import {Single} from './single';
import {Leaf, LEAF} from './leaf';

/**
 * A double node.
 *
 * @private
 */
export class Double {
  /**
   * @private
   */
  constructor(a, b, left, middle, right) {
    this.a = a;
    this.b = b;
    this.left = left;
    this.middle = middle;
    this.right = right;
  }

  /**
   * @private
   */
  get(key, comparator) {
    const l = this.left;
    const m = this.middle;
    const r = this.right;

    const ca = comparator(key, this.a.key);
    const cb = comparator(key, this.b.key);

    if (ca === 0) {
      return this.a.value;
    }

    if (cb === 0) {
      return this.b.value;
    }

    if (!(l instanceof Leaf) && ca < 0) {
      return l.get(key);
    }

    if (!(r instanceof Leaf) && cb > 0) {
      return r.get(key);
    }

    if (!(m instanceof Leaf) && ca > 0 && cb < 0) {
      return m.get(key);
    }

    return null;
  }

  /**
   * @private
   */
  set(key, value, comparator) {
    const a = this.a;
    const b = this.b;
    const l = this.left;
    const m = this.middle;
    const r = this.right;
    const e = new Entry(key, value);

    const ca = comparator(key, a.key);
    const cb = comparator(key, b.key);

    if (ca === 0) {
      if (value === a.value) {
        return this;
      }

      return new Double(e, b, l, m, r);
    }

    if (cb === 0) {
      if (value === b.value) {
        return this;
      }

      return new Double(a, e, l, m, r);
    }

    if (ca < 0) {
      if (l instanceof Leaf) {
        return new Pseudo(a, new Single(e, LEAF, LEAF), new Single(b, LEAF, LEAF));
      }

      const i = l.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(a, new Single(i.a, i.left, i.right), new Single(b, m, r));
      }

      if (i === l) {
        return this;
      }

      return new Double(a, b, i, m, r);
    }

    if (cb > 0) {
      if (r instanceof Leaf) {
        return new Pseudo(b, new Single(a, LEAF, LEAF), new Single(e, LEAF, LEAF));
      }

      const i = r.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(b, new Single(a, l, m), new Single(i.a, i.left, i.right));
      }

      if (i === r) {
        return this;
      }

      return new Double(a, b, l, m, i);
    }

    if (ca > 0 && cb < 0) {
      if (m instanceof Leaf) {
        return new Pseudo(e, new Single(a, LEAF, LEAF), new Single(b, LEAF, LEAF));
      }

      const i = m.set(key, value, comparator);

      if (i instanceof Pseudo) {
        return new Pseudo(i.a, new Single(a, l, i.left), new Single(b, i.right, r));
      }

      if (i === m) {
        return this;
      }

      return new Double(a, b, l, i, r);
    }
  }
}
