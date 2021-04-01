const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: process.env.API_ENDPOINT || 'http://localhost:8080',
  headers: {
    'x-api-key': process.env.X_API_KEY || 'testApiKey',
  },
}));

app.use(express.static(path.join(__dirname, './build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});
app.listen(process.env.PORT || 3000);

