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

Returns **Any**

#### last

Get the last item of a deque.

**Parameters**

-   `deque` **Deque**

Returns **Any**

#### pop

Get a new deque with the last item removed.

**Parameters**

-   `deque` **Deque**

Returns **Deque**

#### push

Add an item to the end of a deque.

**Parameters**

-   `item` **Any**
-   `deque` **Deque**

Returns **Deque**

#### shift

Get a new deque with the first item removed.

**Parameters**

-   `deque` **Deque**

Returns **Deque**

#### unshift

Add an item to the front of a deque.

**Parameters**

-   `item` **Any**
-   `deque` **Deque**

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

#### empty

Create an empty list.

**Examples**

```javascript
const l = List.empty();
```

Returns **List**

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

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

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

Apply an iteratee to each entry of a map.

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

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

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

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

#### set

Set the value of a key in a map.

**Parameters**

-   `key` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
-   `value` **Any**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### values

Get all values of a map.

**Parameters**

-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)**

### Set

A immutable set implemented on top of a key/value map. Since the set is implemented as a balanced search tree, keys
must be comparable.

```js
import {Set} from 'uforanderlig';
```

#### add

Add a key to a set.

**Parameters**

-   `key` **Any**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### empty

Create an empty set.

Returns **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

#### has

Check if a key exists in a set.

**Parameters**

-   `key` **Any**
-   `set` **[Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)**

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
