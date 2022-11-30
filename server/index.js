const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
require('dotenv').config();
const WishItem = require('./model/wishItem.js');

app.use(express.json());
app.use(cors());

app.get('/api/wishlist', (req, res, next) => {
  WishItem.find({})
    .then((wishlist) => {
      res.json(wishlist);
    })
    .catch((error) => {
      next(error);
    });
});

app.get('/api/wishlist/:id', (req, res) => {
  const id = req.params.id;
  const wishItem = wishlist.find((item) => item.id === id);
  res.json(wishItem);
});

app.post('/api/wishlist', (req, res, next) => {
  const body = req.body;
  if (!body.item) {
    return response.status(400).json({
      error: 'item missing',
    });
  }

  const wishItem = new WishItem({
    name: body.item,
    whereToBuy: body.whereToBuy,
    available: true,
    imageUrl: body.imageUrl,
  });

  wishItem
    .save()
    .then((savedWishItem) => {
      res.json(savedWishItem);
    })
    .catch((error) => {
      next(error);
    });
});

app.patch('/api/wishlist/:id', (req, res) => {
  const itemId = req.params.id;
  const body = req.body;

  const toBeAdjustedWishItem = {
    available: body.available,
    whereToBuy: body.whereToBuy,
    imageUrl: body.imageUrl,
  };

  WishItem.findByIdAndUpdate(itemId, toBeAdjustedWishItem)
    .then((updatedWishItem) => {
      res.json(updatedWishItem);
    })
    .catch((error) => next(error));
});

app.delete('/api/wishlist/:id', (req, res, next) => {
  WishItem.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
});

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

app.use(requestLogger);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
