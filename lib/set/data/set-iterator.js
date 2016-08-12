import {iterator} from '../../map/iterator';

export class SetIterator {
  constructor({map}) {
    this.iterator = iterator(map);
  }

  next() {
    let {value, done} = this.iterator.next();

    if (value) {
      value = value[1];
    }

    return {
      value,
      done
    };
  }
}
