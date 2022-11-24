const express = require('express');
const uuid = require('uuid');
const app = express();

app.use(express.json());

let wishlist = [
  {
    id: '156ce4a4-e88e-4111-826f-9bf5d324a386',
    name: 'LADIES BLACK DIAL TRADITIONAL GOLD PLATED CASIO WATCH',
    whereToBuy: 'https://amzn.eu/d/6IY5J5G',
    available: true,
    imageUrl: 'https://m.media-amazon.com/images/I/71MF2vtiGYL._AC_UY879_.jpg',
  },
  {
    id: 'ab70baf0-20ef-4ebe-a938-9d9efcb712d4',
    name: 'Sony WH-1000XM5 Wireless Bluetooth Noise Canceling Headphones',
    whereToBuy: 'https://amzn.eu/d/96XJBAK',
    available: true,
    imageUrl: 'https://m.media-amazon.com/images/I/61fxPWFu6aL._AC_SY450_.jpg',
  },
];

app.get('/api/wishlist', (req, res) => {
  res.json(wishlist);
});

app.get('/api/wishlist/:id', (req, res) => {
  const id = req.params.id;
  const wishItem = wishlist.find((item) => item.id === id);
  res.json(wishItem);
});

app.post('/api/wishlist', (req, res) => {
  const body = req.body;

  if (!body.name) {
    return response.status(400).json({
      error: 'item missing',
    });
  }

  const wishItem = {
    name: body.name,
    whereToBuy: body.whereToBuy,
    available: true,
    imageUrl: body.imageUrl,
    id: uuid.v4(),
  };

  wishlist = wishlist.concat(wishItem);

  res.json(wishItem);
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

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
