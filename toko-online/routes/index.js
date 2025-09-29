var express = require('express');
var router = express.Router();
//fungsi require selain impor file, bis aimpor resourch
var product = require('../data/product.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Toko online sederhana',
    product: product,
    search: '', // harus ada di sini, bukan di bawah res.render
  });
});

router.get('/search', function (req, res, next) {
  const q = req.query.q?.toLowerCase() || '';

  // Filter produk berdasarkan nama (case-insensitive)
  const filteredProducts = product.filter((p) => p.name.toLowerCase().includes(q));

  res.render('index', {
    title: 'Hasil Pencarian',
    product: filteredProducts,
    search: q, // kirim ke view
  });
});

module.exports = router;
