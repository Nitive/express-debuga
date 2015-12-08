# express-debuga

Do your debug workflow more visible on local server.

## Install

```
npm i -D express-debuga
```

## Usage

```js
var debuga = require('express-debuga');

app.use(debuga())
```

## Options

### `favicon`

Default: `null` | `String`. If `null` then set debug default favicon ![debug](debug.ico), else you can set custom path to favicon.

```js
app.use(debuga({
  favicon: 'path/to/favicon.ico'
}))
```

## License

MIT.
