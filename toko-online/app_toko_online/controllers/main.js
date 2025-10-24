var products = require('../../data/product.json');

const index = (req, res) => {
  res.render('index', {
    title: 'Toko Online Sederhana',
    products: products,
    search: '',
  });
};

// const search = (req, res) => {
//   const q = req.query.q?.toLowerCase() || '';

//   // Filter produk berdasarkan nama (case-insensitive)
//   const filtered = products.filter((p) => p.name.toLowerCase().includes(q));

//   res.render('index', {
//     title: 'Hasil Pencarian',
//     products: filtered,
//     search: q, // kirim kembali query pencarian ke view
//   });
// };

// Ekspor kedua function untuk expor variabel dari controller
module.exports = { index };
