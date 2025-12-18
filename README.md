# Mixjar

API Wrappers for various music based platforms.

## Features

The following platforms are currently available.

* [Mixcloud API](https://api.mixcloud.com/)
* [Hearthisat API](https://api-v2.hearthis.at/)

## Installation
1. Using npm
    ```shell
    $ npm i --save mixjar
    ```
2. Using yarn
    ```shell
    $ yarn add mixjar
    ```

## Usage

```js
const Mixjar = require('mixjar');
// or
// const { Hearthisat, Mixcloud } = require('mixjar');

// mixcloud with optional access_token for authenticated users
const mixcloud = new Mixjar.Mixcloud('access_token');
const hearthisat = new Mixjar.Hearthisat();
```
For all functions, there are two methods to obtain your result. For instance
* Callbacks
    ```js
    mixcloud.user('ndungujan23').asCallback((err, result) => {})
    ```
* Promise
    ```js
    mixcloud.user('ndungujan23').asPromise().then(() => {})
    ```


## API

Refer to the [Docs](https://ndungujan23.github.io/mixjar/) for available sources / platforms

> Note: A good number of the API methods have been implemented. More will be added over time
> as well as more sources. All PRs are welcome 🙂, for any and new methods

## Other Projects

You can find the kotlin wrapper for the same in [Mixjar Kotlin Repo](https://github.com/iankang/mixjar)

## Caveat

This is not yet complete and is not an official MixCloud/Hearthisat wrapper.
send your thoughts and suggestions to ndungujan23@gmail.com
