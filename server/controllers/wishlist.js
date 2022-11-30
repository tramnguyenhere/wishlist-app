const wishlistRouter = require('express').Router();
const WishItem = require('../model/wishItem');

wishlistRouter.get('/', (req, res, next) => {
  console.log('ok');
  WishItem.find({})
    .then((wishlist) => {
      res.json(wishlist);
    })
    .catch((error) => {
      console.log('err');
      next(error);
    });
});

wishlistRouter.post('/', (req, res, next) => {
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

wishlistRouter.patch('/:id', (req, res) => {
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

wishlistRouter.delete('/:id', (req, res, next) => {
  WishItem.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = wishlistRouter;
