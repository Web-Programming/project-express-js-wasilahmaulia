const express = require('express');
const app = express();
const port = 3000;

//membuat Route ke halaman home dengan method GET
app.get('/', (req, res) => {
  res.send('Halo, ini halaman HOME dengan method GET');
});

//membuat Middleware untuk menerima request body dari json
app.use(express.json());

//membuat Route ke halaman submit dengan method POST
app.post('/submit', (req, res) => {
  const { name } = req.body;
  res.send('Hello, ${name} dengan NPM ${npm}. Apakah kamu $(jeniskelamin)?');
});

//Serving static file
// NOTES: jika mau memanggil gambar, memanggil file html jika web dibuat dg node JS
app.use(express.static('public'));

app.listen(port, () => {
  console.log('Server running at http://localhost:${port}/');
});
