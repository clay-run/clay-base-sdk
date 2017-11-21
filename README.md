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
const Base = require('clay-base-sdk')

const GameBase = new Base('fijef30f92hnb') // private key
const users = GameBase.getTable('users')

users.insert({
    username: 'playerunkown',
    game: 'battlegrounds'
}).then(() => {
    // row inserted into the base

    // let's query all the players
    return users.findAll()
}).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```

## Raw queries

Clay Base runs on Postgres, which allows you to run raw queries in a totally secure environment.

```javascript
const Base = require('clay-base-sdk')
const GameBase = new Base('fijef30f92hnb') // private key

GameBase.query(`SELECT * FROM players WHERE username="unkownplayer" LIMIT 1`).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```

## Querying

We offer a Javascript friendly interface to query rows in a basic way:

```javascript
const Base = require('clay-base-sdk')

const GameBase = new Base('fijef30f92hnb') // private key
const users = GameBase.getTable('users')

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