var express = require('express');
var router = express.Router();
//fungsi require selain impor file, bis aimpor resourch
var product = require('../data/product.json');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Toko online sederhana', product: product });
  //title itu parameter
  //jika ingin nambh parameter lain,
});

module.exports = router;
