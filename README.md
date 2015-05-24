# electron-template-menu

Normalize menu(on mac) for electron.

- [electron/menu.md at master · atom/electron](https://github.com/atom/electron/blob/master/docs/api/menu.md "electron/menu.md at master · atom/electron")

nw.js version: [azu/nw-normalize-menu](https://github.com/azu/nw-normalize-menu "azu/nw-normalize-menu")

## Installation

    npm install electron-template-menu
    
## Usage

```js
var app = require('app');
app.on('ready', function () {
    require("electron-template-menu")();
});
```

### Get template

```
var menu = require("electron-template-menu");
var template = menu.template;
// modify template
menu(template);
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT