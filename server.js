// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const compression = require('compression');

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/angular-14-features-demo')));
app.use(compression());

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-14-features-demo/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4200';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
