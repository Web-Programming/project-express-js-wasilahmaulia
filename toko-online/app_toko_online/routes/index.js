var express = require('express');
var router = express.Router();
//fungsi require selain impor file, bis aimpor resourch
var mainController = require('../controllers/main');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Toko online sederhana',
//     product: product,
//     search: '', // harus ada di sini, bukan di bawah res.render
//   });
// });

router.get('/', mainController.index);
router.get('/search', mainController.search);

module.exports = router;
