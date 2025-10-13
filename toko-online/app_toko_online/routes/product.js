var express = require('express');
var router = express.Router();
var Products = require('../models/products');
var productController = require('../controllers/product');
// var products = require('../../data/product.json');

// ROUTES
router.get('/all', productController.index);
router.get('/:id', productController.detail);

// Controller: contoh implementasi fungsi index (ambil semua produk dari MongoDB)
const index = async (req, res) => {
  try {
    const prod = await Products.find({}); // ambil seluruh data dari collection
    res.render('index', {
      title: 'Toko Online Sederhana - Ini dari Mongo DB',
      products: prod,
    });
  } catch (err) {
    res.status(500).send('Gagal memuat produk');
  }
};

// ROUTE: Detail produk berdasarkan ID
router.get('/:id', async function (req, res) {
  try {
    const productId = parseInt(req.params.id); // Tangkap ID dari URL
    const product = products.find((p) => p.id === productId); // Cari produk by id

    if (!product) {
      return res.status(404).send('Produk tidak ditemukan!');
    }

    res.render('product-detail', {
      title: product.name,
      product: product,
    });
  } catch (err) {
    res.status(500).send('Gagal memuat detail produk');
  }
});

// ROUTE: Detail review produk
router.get('/:productId/review/:reviewId', function (req, res) {
  const { productId, reviewId } = req.params;

  res.render('review-detail', {
    title: `Ulasan ${reviewId} untuk Produk ${productId}`,
    productId,
    reviewId,
  });
});

module.exports = router;
