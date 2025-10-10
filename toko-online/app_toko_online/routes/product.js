var express = require('express');
var router = express.Router();
var products = require('../../data/product.json');

router.get('/:id', function (req, res, next) {
  const productId = parseInt(req.params.id); //Tangkap ID dari URL
  const product = products.find((p) => p.id === productId); //Cari produk by id

  if (!product) {
    //jika produk tidak ditemukan
    return res.status(404).send('Produk tidak ditemukan!');
  }
  res.render('product-detail', {
    title: product.name,
    product: product,
  });
});

router.get('/:productId/review/:reviewId', function (req, res, next) {
  const productId = req.params.productId;
  const reviewId = req.params.reviewId;
  // Kirim kedua parameter ke view untuk ditampilkan
  res.render('review-detail', {
    title: `Ulasan ${reviewId} untuk Produk ${productId}`,
    productId: productId,
    reviewId: reviewId,
  });
});

module.exports = router;
