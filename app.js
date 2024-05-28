const express = require('express');
const path = require('path');
const routes = require('./routes/route');
const app = express();
const port = 8000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
