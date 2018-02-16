const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

/*
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'luxuryEcommerceDB';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error(err);
  } else {
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
  }
});
*/

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(session({
    secret: process.env.SESSION_SECRET || 'anImpossibleToGuessSecret',
    store: new MongoStore({ url: 'mongodb://localhost:27017' }),
    resave: false,
    saveUninitialized: false,
}));

/// Session Favorite Routes ///
app.get('/session/favorites', (req, res, next) => {
    if (!req.session.favoriteItems) req.session.favoriteItems = [];
    res.status(200).json(req.session.favoriteItems);
});
app.post('/session/addFavorite/:id', (req, res, next) => {
    if (!req.session.favoriteItems) req.session.favoriteItems = [];
    req.session.favoriteItems.push(req.params.id);
    res.status(201).json(req.params.id);
});
app.delete('/session/deleteFavorite/:id', (req, res, next) => {
    if (req.session.favoriteItems) {
        req.session.favoriteItems =
        req.session.favoriteItems.filter(id => {
            return id !== req.params.id;
        });
    }
    res.status(204).json(req.params.id);
});

app.use('/browse', require('./routes/browseRouter'));
app.use('/item', require('./routes/itemRouter'));

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
