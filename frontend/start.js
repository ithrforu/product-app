const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));

// app.use('/api', proxy('https://my-product-app-2022.herokuapp.com/', {
//   preserveHostHdr : true 
// }));

app.get('*', (req, res) => {
  if(!req.path.includes('/api/')) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  }
});

app.listen(PORT, () => {
  console.log('React app started on port: ' + PORT);
});