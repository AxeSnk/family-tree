const express = require('express');
const path = require('path');

const PATH_TO_STATIC = path.join(__dirname, '../build');
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const app = express();
app.use(express.static(PATH_TO_STATIC));
app.get('*', (_, res) => res.sendFile(path.resolve(PATH_TO_STATIC, 'index.html')));

app.listen(PORT, HOST, (...args) => {
  console.log(...args);
  console.log(`Server listening on ${PORT}`);
}).on('error', (err) => {
  console.error(err);
});
