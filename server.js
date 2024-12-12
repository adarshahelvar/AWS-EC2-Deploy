// Import Express module
const express = require('express');

// Initialize Express app
const app = express();

// Define the server port
const PORT = 3000;

// Define the root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle 404 for other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});