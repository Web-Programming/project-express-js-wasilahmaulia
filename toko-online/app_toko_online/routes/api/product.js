const express = require('express');
const router = express.Router();
const productController = require('../../controllers/product');

// function requireJson(req, res, next) {
//   if (req.header['content-type'] != 'application/json') {
//     return res.status(406).josn({
//       status: false,
//       message: 'Header harus application/json',
//     });
//   }
//   next();
// }

//url create - POST (/api/produk)
//karna mau ambil tampilan home saja jadi hanya pake slash
router.post('/', productController.create);
//url read all - GET (/api/produk)
router.post('/', productController.all);
//walau alamat sama tapi method berbeda tidak masalah selagi METHODnya beda!!
//url read one - detail - GET (/api/produk/:id)
router.get('/:id', productController.detailproduk);
//url update - PUT -> PUT, ambil data satu satu (/api/produk/:id)
router.get('/:id', productController.update);
//url delete - DELETE (/api/produk/:id)
router.delete('/:id', productController.remove);

module.exports = router;
