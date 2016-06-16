export function last(list) {
  if (!list) {
    return null;
  }

  let n = list._head;

  while (n) {
    if (!n._next) {
      return n._item;
    }

    n = n._next;
  }

  return null;
}
