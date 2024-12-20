# ![Itty Router][logo-image]

[![npm package][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Open Issues][issues-image]][issues-url]
<a href="https://github.com/kwhitley/itty-router-extras" target="\_parent">
  <img alt="" src="https://img.shields.io/github/stars/kwhitley/itty-router-extras.svg?style=social&label=Star" />
</a>
<a href="https://twitter.com/kevinrwhitley" target="\_parent">
  <img alt="" src="https://img.shields.io/twitter/follow/kevinrwhitley.svg?style=social&label=Follow" />
</a>

# Deprecation Notice
_`itty-router-extras` has been fully deprecated in favor of using the built-in helpers within [`itty-router`](https://itty.dev/itty-router) itself._

#### Before
```ts
import { Router } from 'itty-router'
import { json, withParams, withContent, error } from 'itty-router-extras'
```

#### Now
```ts
import { Router, json, withParams, withContent, error } from 'itty-router'
```

### v5.x Migration Guide
https://itty.dev/itty-router/migrations/v4-v5

[twitter-image]:https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fitty-router-extras
[logo-image]:https://user-images.githubusercontent.com/865416/112549341-a4377300-8d8b-11eb-8977-574967dede99.png
[gzip-image]:https://img.shields.io/bundlephobia/minzip/itty-router-extras
[gzip-url]:https://bundlephobia.com/result?p=itty-router-extras
[issues-image]:https://img.shields.io/github/issues/kwhitley/itty-router-extras
[issues-url]:https://github.com/kwhitley/itty-router-extras/issues
[npm-image]:https://img.shields.io/npm/v/itty-router-extras.svg
[npm-url]:http://npmjs.org/package/itty-router-extras
[travis-image]:https://travis-ci.org/kwhitley/itty-router-extras.svg?branch=v0.x
[travis-url]:https://travis-ci.org/kwhitley/itty-router-extras
[david-image]:https://david-dm.org/kwhitley/itty-router-extras/status.svg
[david-url]:https://david-dm.org/kwhitley/itty-router-extras
[coveralls-image]:https://coveralls.io/repos/github/kwhitley/itty-router-extras/badge.svg?branch=v0.x
[coveralls-url]:https://coveralls.io/github/kwhitley/itty-router-extras?branch=v0.x
