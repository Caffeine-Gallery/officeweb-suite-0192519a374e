const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, 'image.png'); // Save all uploads as image.png
    }
});

const upload = multer({ storage: storage });

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Endpoint to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
