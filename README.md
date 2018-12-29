# Clay Base Node.js SDK

This is the official Clay Node.js library. 

## 👋 What is Clay?
[Clay](https://clay.run) is a new type of tool that brings together the best parts of spreadsheets, serverless coding & simple automation. Quickly connect your apps and code into automated workflows, build useful tools, enrich data sets and more!

Clay brings together 3 different tools that you can use to build the flexible tools you want:

1. Bases: 
A modern database, with a spreadsheet-like UI and an easy to use API. (This library helps you to work with your Clay Bases)

1. Serverless Functions: 
Simple, light-weight serverless functions, that you can use as APIs or within your Clay Bases & Workflows. Under the hood these are powered by AWS Lambda, running only when called, and auto-scaling.

3. Workflows: A drag & drop way to specify a sequence of actions (e.g. a series of Clay functions, API calls and actions in apps) to run, based on some event trigger such as an event in a SaaS product, a Webhook Event, a Scheduled Run, or an event in one of your bases.


## 📖 Documentation
Visit the [Clay Node.js API Docs](https://reference.clay.run/) for in-depth docs.

## 💬 Support
Our team is available for support within the [Clay Slack Channel](http://slack.clay.run/)

Or, if you don't want to join another Slack channel, ping us via Intercom from within the app, or send us an email at [contact@clay.run](mailto:contact@clay.run)

## ⬇ Installation 

Using `npm`:

```
npm install https://github.com/clay-run/clay-base-sdk
```

NOTE: if you are looking to use a Javascript SDK within the browser, you may use the following script tag: 

```
// To use the SDK client-side within the browser:
<script src="https://unpkg.com/clay-base-sdk@latest/bundle.js"></script>

```

## 🔌 Usage

First we set up the Base, and we instantiate it using the Private API Key (which gives us read/write permissions for the Base. There is also a Public API key available for every Base which has read-only permissions.

```javascript
const Base = require('clay-base-sdk')

const GameBase = new Base('fijef30f92hnb') // Private Base API Key
```

Inserting Records Into a given Table within our Base after setting up the client:

(Using Promises)
```javascript
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

## 🔎 Querying a Base

We offer a user-friendly Javascript API interface to query your Base. Refer to the [Clay Node.js API Reference - Query Section](https://reference.clay.run/?javascript#query) for more information on the query syntax:

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

## 🚜 Raw SQL Queries

Clay also support a secure way to run full SQL queries on your Bases. Here's a brief example of how you can specify a raw-SQL query using the Node.js SDK, and we encourage you to refer to the [API Reference Raw Query](https://reference.clay.run/?javascript#raw) section for more in-depth instructions

```javascript
const Base = require('clay-base-sdk')
const GameBase = new Base('fijef30f92hnb') // private key

GameBase.query(`SELECT * FROM players WHERE username="unkownplayer" LIMIT 1`).then((rows) => {
    // rows = [ { username: 'playerunkown', game: 'battlegrounds }]
})
```

## 🐞 Bugs

Please report issues with the SDK in the [issues tab on Github](https://github.com/clay-run/clay-base-sdk/issues).

## ❤️ Author
This repository is maintained and published by [Clay Labs Inc.](https://clay.run)
