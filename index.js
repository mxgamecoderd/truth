const express = require('express');
const app = express();
const truths = require('./data/truth.json');
const dares = require('./data/dare.json');

// Endpoint for random truth
app.get('/api/truth', (req, res) => {
    const randomTruth = truths.truths[Math.floor(Math.random() * truths.truths.length)];
    res.json({ truth: randomTruth });
});

// Endpoint for random dare
app.get('/api/dare', (req, res) => {
    const randomDare = dares.dares[Math.floor(Math.random() * dares.dares.length)];
    res.json({ dare: randomDare });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
