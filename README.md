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

Returns **List**

#### empty

Create an empty list.

Returns **List**

#### head

Get the head of a list.

**Parameters**

-   `list` **List**

Returns **Any**

#### size

Get the size of a list.

**Parameters**

-   `list` **List**

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### tail

Get the tail of a list.

**Parameters**

-   `list` **List**

Returns **List**

## License

Copyright © 2016 [Kasper Kronborg Isager](https://github.com/kasperisager). Licensed under the terms of the [MIT license](LICENSE.md).
