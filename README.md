koa-attach
==========

Koa-attach is a koa middleware for attaching node packages to koa context.


### Installation

```
$ npm install koa-attach
```

### Usage

* As an array
```
var attach = require('koa-attach');
app.use(attach([ 'lodash', 'moment' ]);
```
* As a dictionary
```
var attach = require('koa-attach');
app.use(attach({
    $: 'lodash',
    m: 'moment'
}));
```

### License
MIT