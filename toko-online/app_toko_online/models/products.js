const mongoose = require('mongoose');

//buat skema produk
const ProductSchema = new mongoose.Schema({
  //tidak perlu membuat properti id, karena akan dibuat otomatis
  //dengan nama_id
  name: {
    type: String,
    required: [true, 'Nama produk harus diisi'],
    //required artinya kolom harus diisi
    trim: true, //menghilangkan spasi di awal dan akhir
  },
  price: {
    type: Number,
    //max : [1000, "Harga Produk maksimal 1000"]
  },
  description: {
    type: String,
    required: false,
  },
  stok: {
    type: Number,
    default: 0, //default, propoerti untuk memberikan nilai bawaan
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//buat model dari skema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
