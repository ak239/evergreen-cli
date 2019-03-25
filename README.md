# evergreen-cli

<!-- [START badges] -->
[![NPM ndb package](https://img.shields.io/npm/v/evergreen-cli.svg)](https://npmjs.org/package/evergreen-cli)
<!-- [END badges] -->

evergreen-cli contains jsut one method - update, call it to update your CLI app.

#### update([options])
- `options` <[Object]>
  - `cwd` <[string]> working directory of app to update, should contain `package.json`.
  - `pkg` <[Object]> `package.json` object.
  - `dumpIO` <[boolean]> dumps stdio of package manager.
