const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { handleContactForm } = require('../controllers/formController');

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

router.post('/', upload.single('resume'), handleContactForm);

module.exports = router;