# Clay Base SDK

This SDK connects to Clay Base seemlessly using your Private key.

## Install

Using `npm`:

```
npm install https://github.com/clay-run/clay-base-sdk
```

(We are going to publish an npm package soon)

## Usage

Inserting rows:

```javascript
const ClayBase = require('clay-base-sdk')
const myBase = new ClayBase('fijef30f92hnb') // private key

myBase.insert('users', {
    username: 'playerunkown',
    game: 'battlegrounds'
}).then(() => {
    // row insert into the base

    return myBase.findAll()
}).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```

## Raw queries

Clay Base runs on Postgres, which allows you to run raw queries in a totally secure environment.

```javascript
const ClayBase = require('clay-base-sdk')
const myBase = new ClayBase('fijef30f92hnb') // private key

myBase.query(`SELECT * FROM players WHERE username="unkownplayer" LIMIT 1`).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```


## Bugs

Please report bug and issues in the [issues tab on Github](https://github.com/clay-run/clay-base-sdk/issues).