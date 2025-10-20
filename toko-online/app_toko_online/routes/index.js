var express = require('express');
var router = express.Router();
//fungsi require selain impor file, bis aimpor resourch
//panggil controller
var mainController = require('../controllers/main');

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Toko online sederhana',
//     product: product,
//     search: '', // harus ada di sini, bukan di bawah res.render
//   });
// });

//stlh controller dipanggil baru buat get
router.get('/', mainController.index);

//selesaikan fungsi route pencarian, pisahkan dengan controller

module.exports = router;
