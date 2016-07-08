# Uforanderlig

> Simple and efficient JavaScript implementations of common persistent data structures

## Contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [API](#api)
-   [License](#license)

## Installation

```sh
$ npm install --save uforanderlig
```

## Usage

[<img src=https://tonicdev.com/favicon.ico width=25 align=top> __Try out Uforanderlig in your browser__](https://tonicdev.com/npm/uforanderlig)

```js
import {List} from 'uforanderlig';

const list1 = List.empty();
const list2 = List.add(1, list1);

list1 !== list2;
```

## API

### Deque

An immutable deque implemented as two forward-linked lists.

```js
import {Deque} from 'uforanderlig';
```

#### empty

Create an empty deque.

**Examples**

```javascript
const d = Deque.empty();
```

Returns **Deque**

#### first

Get the first item of a deque.

**Parameters**

-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.push(1, d);
d = Deque.push(2, d);
d = Deque.push(3, d);
Deque.first(d);
// => 1
```

Returns **Any**

#### last

Get the last item of a deque.

**Parameters**

-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.push(1, d);
d = Deque.push(2, d);
d = Deque.push(3, d);
Deque.last(d);
// => 3
```

Returns **Any**

#### pop

Get a new deque with the last item removed.

**Parameters**

-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.push(1, d);
d = Deque.push(2, d);
d = Deque.push(3, d);
Deque.pop(d);
// => Deque [ 1, 2 ]
```

Returns **Deque**

#### push

Add an item to the end of a deque.

**Parameters**

-   `item` **Any**
-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.push(1, d);
d = Deque.push(2, d);
d = Deque.push(3, d);
// => Deque [ 1, 2, 3 ]
```

Returns **Deque**

#### shift

Get a new deque with the first item removed.

**Parameters**

-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.push(1, d);
d = Deque.push(2, d);
d = Deque.push(3, d);
Deque.shift(d);
// => Deque [ 2, 3 ]
```

Returns **Deque**

#### unshift

Add an item to the front of a deque.

**Parameters**

-   `item` **Any**
-   `deque` **Deque**

**Examples**

```javascript
let d = Deque.empty();
d = Deque.unshift(1, d);
d = Deque.unshift(2, d);
d = Deque.unshift(3, d);
// => Deque [ 3, 2, 1 ]
```

Returns **Deque**

### List

An immutable forward-linked list.

```js
import {List} from 'uforanderlig';
```

#### add

Add an item to the front of a list.

**Parameters**

-   `item` **Any**
-   `list` **List**

**Examples**

```javascript
const l1 = List.empty();
const l2 = List.add(1, l2);
const l3 = List.add(2, l3);
```

Returns **List**

#### each

Loop over the items of a list.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.each(console.log, l);
```

#### empty

Create an empty list.

**Examples**

```javascript
const l = List.empty();
```

Returns **List**

#### every

Check if every item of a list matches a predicate.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.every(i => i < 4, l);
// => true
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### filter

Filter the items of a list.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.filter(i => i % 2 !== 0, l);
// => List [ 3, 1 ]
```

Returns **List**

#### find

Find the first item of a list that matches a predicate.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.find(i => i % 2 === 0, l);
// => 2
```

Returns **Any**

#### fold

Fold over the items of a list.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `state` **Any**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.fold((s, i) => s + i, 0, l);
// => 6
```

Returns **Any**

#### head

Get the head of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.head(l);
// => 3
```

Returns **Any**

#### isEmpty

Check if a list is empty.

**Parameters**

-   `list` **List**

**Examples**

```javascript
const l1 = List.empty();
const l2 = List.add(1, l);
List.isEmpty(l1);
// => true
List.isEmpty(l2);
// => false
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### last

Get the last item of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.last(l);
// => 1
```

Returns **Any**

#### length

Get the length of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.length(l);
// => 3
```

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### map

Map over the items of a list.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.map(i => i * 2, l);
// => List [ 2, 4, 6 ]
```

Returns **List**

#### reduce

Reduce a list to a single value.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.reduce((s, i) => s + i, l);
// => 6
```

Returns **Any**

#### reverse

Reverse the items of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.reverse(l);
// => List [ 1, 2, 3 ]
```

Returns **List**

#### some

Check if some item of a list matches a predicate.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.some(i => i > 2, l);
// => true
```

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### tail

Get the tail of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.tail(l);
// => List [ 2, 1 ]
```

Returns **List**

### Map

An immutable key/value map implemented as a 2-3 tree using path copying upon insertion. Since the map is implemented
as a balanced search tree, keys must be comparable.

```js
import {Map} from 'uforanderlig';
```

#### each

Loop over the entries of a map.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### empty

Create an empty map.

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### entries

Get all entries of a map.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **List&lt;Tuple>**

#### every

Check if a predicate returns truthy for all entries of a map.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### filter

Filter the entries of a map.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### find

Find the first entry of a map for which a predicate returns truthy.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **Any**

#### fold

Fold over the entries of a map.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `state` **Any**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **Any**

#### get

Get the value of a key in a map.

**Parameters**

-   `key` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **Any**

#### has

Check if a key exists in a map.

**Parameters**

-   `key` **Any**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### isEmpty

Check if a map is empty.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### keys

Get all keys of a map.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **List**

#### map

Map over the entries of a map.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### set

Set the value of a key in a map.

**Parameters**

-   `key` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
-   `value` **Any**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### size

Get the size of a map.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### some

Check if a predicate returns truthy for any entry of a map.

**Parameters**

-   `predicate` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### values

Get all values of a map.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **List**

### Set

A immutable set implemented on top of a key/value map. Since the set is implemented as a balanced search tree, keys
must be comparable.

```js
import {Set} from 'uforanderlig';
```

#### add

Add a value to a set.

**Parameters**

-   `value` **Any**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### each

Loop over the values of a set.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### empty

Create an empty set.

Returns **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### fold

Fold over the values of a set.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `state` **Any**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **Any**

#### has

Check if a value exists in a set.

**Parameters**

-   `value` **Any**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### isEmpty

Check if a set is empty.

**Parameters**

-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

#### map

Map over the values of a set.

**Parameters**

-   `iteratee` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### size

Get the size of a set.

**Parameters**

-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### values

Get the values of a set.

**Parameters**

-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **List**

### Tuple

An immutable tuple.

```js
import {Tuple} from 'uforanderlig';
```

#### of

Create a tuple of elements.

**Parameters**

-   `elements` **...Any**

**Examples**

```javascript
const t = Tuple.of('foo', 'bar');
const [f, b] = t;
// f = 'foo', b = 'bar'
```

Returns **Tuple**

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
