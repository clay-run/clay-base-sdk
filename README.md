# Clay Base SDK

**What is Clay Base?** [Clay Base](https://base.clay.run) is the serverless stateless database. Ideal for Lambda functions. [Learn more](https://base.clay.run)

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
const users = myBase.getTable('users')

users.insert({
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

## Querying

We offer a Javascript friendly interface to query rows in a basic way:

```javascript
const ClayBase = require('clay-base-sdk')

const myBase = new ClayBase('fijef30f92hnb') // private key
const users = myBase.getTable('users')

users.find({
    where: {
        username: 'playerunkown'
    },
    order: 'createdAt DESC',
    limit: 1
}).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```

## Bugs

Please report bug and issues in the [issues tab on Github](https://github.com/clay-run/clay-base-sdk/issues).

## Author

This repository is maintained and published by [Clay Labs Inc.](https://clay.run)