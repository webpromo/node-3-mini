
const express = require('express');
const bodyParser = require('body-parser');
// const massive = require('massive');
require('dotenv').config();
const messagesCtrl = require('./messagesCtrl');
const session = require('express-session');

const app = express();
// massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

// top-level middleware, runs with each request
app.use( bodyParser.json() );
app.use(session({
    secret: "hoserSecret", // required when doing sessions
    resave:false,
    saveUninitionalized: false
}))

app.get('/api/messages', messagesCtrl.getAllMessages);
app.post('/api/messages', messagesCtrl.createMessage);
app.get('/api/messages/history', messagesCtrl.history);

const port = process.env.SERVER_PORT || 3000;  // nodemon monitors this.
app.listen( port, () => { console.log(`Server listening intently on port ${port}.`); } );