const express = require('express');
const jsonServer = require('json-server');
const app = express();
const cors = require('cors');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/files/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

const apiHandler = (req, res, next) => {
  if(req.method === 'POST' || req.method === 'PATCH') {
    if(req.files[0]) {
      req.body.image = `http://localhost:3333/files/${req.files[0].filename}`
    } else {
      req.body.image = '';
    }
  }
  next();
}

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.post('/products', upload.any(), apiHandler);
app.patch('/products/:id', upload.any(), apiHandler);

app.use(express.static('../frontend/build'));
app.use('/files', express.static('./files'));
app.use(
  '/api', 
  (req, res, next) => {
    console.log(req.method + ' request from ' + req.hostname);
    next();
  },
  jsonServer.router('db.json')
);

app.listen(3333, () => {
  console.log('Server is running')
});