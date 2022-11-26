const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors());

let wishlist = [
  {
    id: '156ce4a4-e88e-4111-826f-9bf5d324a386',
    name: 'Ladies Casio watch',
    whereToBuy: 'https://amzn.eu/d/6IY5J5G',
    available: true,
    imageUrl: 'https://m.media-amazon.com/images/I/71MF2vtiGYL._AC_UY879_.jpg',
  },
  {
    id: 'ab70baf0-20ef-4ebe-a938-9d9efcb712d4',
    name: 'Sony WH-1000XM5 Headphones',
    whereToBuy: 'https://amzn.eu/d/96XJBAK',
    available: true,
    imageUrl: 'https://m.media-amazon.com/images/I/61fxPWFu6aL._AC_SY450_.jpg',
  },
];

app.get('/api/wishlist', (req, res) => {
  res.json(wishlist);
  console.log(wishlist);
});

app.get('/api/wishlist/:id', (req, res) => {
  const id = req.params.id;
  const wishItem = wishlist.find((item) => item.id === id);
  res.json(wishItem);
});

app.post('/api/wishlist', (req, res) => {
  const body = req.body;
  if (!body.item) {
    return response.status(400).json({
      error: 'item missing',
    });
  }

  const wishItem = {
    name: body.item,
    whereToBuy: body.whereToBuy,
    available: true,
    imageUrl: body.imageUrl,
    id: uuidv4(),
  };

  wishlist = wishlist.concat(wishItem);

  res.json(wishItem);
});

app.patch('/api/wishlist/:id', (req, res) => {
  const itemId = req.params.id;

  const toAdjustWishItem = wishlist.find((item) => item.id === itemId);
  console.log(toAdjustWishItem);
  toAdjustWishItem.available = req.body.available;

  res.json(toAdjustWishItem);
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
