var express = require('express');
var router = express.Router();
const Product = require('../models/products');
var products = require('../../data/product.json');

// Controller: Menampilkan semua produk
const index = async (req, res) => {
  try {
    // Gunakan find({}) untuk mengambil seluruh data dari collection
    const prod = await Product.find({});
    res.render('index', {
      title: 'Toko Online Sederhana - Ini dari Mongo DB',
      products: prod,
    });
  } catch (err) {
    res.status(500).send('Gagal memuat produk');
  }
};

// Controller: Menampilkan detail produk berdasarkan ID
const detail = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

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
};

//membuat rest api
const apiall = async (req, res) => {
  try {
    const prod = await Product.find({});
    res.status(200).json({
      status: true,
      message: 'Data produk berhasil diambil',
      data: prod,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: 'Gagal mengambil data produk',
      error: err.message,
    });
  }
};

module.exports = { index, detail };
