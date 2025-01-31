require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Route
app.get('/', (req, res) => {
    res.json({
        email: process.env.EMAIL || "waguthijane61@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/codingbot995/API.git"
    });
});

// Start server by
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});