<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we will be creating a chat application that will use sessions and custom middleware.

## Setup

- Fork and clone this repository.
- `cd` into the project.
- Run `npm install`.

## Step 1

### Summary

In this step, we'll use `npm` to install, `express`, `body-parser`, and `dotenv` and set up our server file.

### Instructions

- Run `npm install --save express dotenv body-parser`.
- Create a folder called `server`. Within the `server` folder, create the `server.js` file.
- Create a `.env` file. Add the property `SERVER_PORT` to your .env file and assign it the value of `3005`;
- Set up your server file using `express`, `body-parser` middleware, and listening on a port.
  - Don't forget to configure `dotenv` to use with your session secret and include your `.env` file in your `.gitignore`.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

let { SERVER_PORT } = process.env;

const app = express();

app.use(bodyParser.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
```

</details>

## Step 2

### Summary

In this step, we will set up needed endpoints and create a controller file.

### Instructions

- Create a
