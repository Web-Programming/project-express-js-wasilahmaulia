//app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hai, Wasilah\n');
});

server.listen(3000, () => {
  console.log('Server running at https:localhost:3000/');
});
