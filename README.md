# Uforanderlig

> Simple and efficient JavaScript implementations of common immutable data structures

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

### List

An immutable forward linked list.

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

#### size

Get the size of a list.

**Parameters**

-   `list` **List**

**Examples**

```javascript
let l = List.empty();
l = List.add(1, l);
l = List.add(2, l);
l = List.add(3, l);
List.size(l);
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

An immutable 2-3 tree map.

```js
import {Map} from 'uforanderlig';
```

#### empty

Create an empty map.

Returns **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

#### get

Get the value of a key in a map.

**Parameters**

-   `key` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **Any**

#### set

Set the value of a key in a map.

**Parameters**

-   `key` **([String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) \| [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number))**
-   `value` **Any**
-   `map` **[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)**

Returns **Any**

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
