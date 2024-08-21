// server.js
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <div id="container">
          <h1 id="title">Sample Title</h1>
          <span id="description">Sample description</span>
          <img id="image" src="https://dummyimage.com/300/09f/fff.png" />
          <a id="link" href="/sample-link">Sample Link</a>
          <p id="last-updated">2024-01-01</p>
        </div>
      </body>
    </html>
  `);
});

const startServer = () => {
  return new Promise((resolve) => {
    const server = app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
      resolve(server);
    });
  });
};

const stopServer = (server) => {
  return new Promise((resolve) => {
    server.close(() => {
      console.log('Server stopped.');
      resolve();
    });
  });
};

module.exports = { startServer, stopServer };
