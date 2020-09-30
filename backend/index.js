const http = require('http');
const app = require('./src/server');

const port = process.env.APP_PORT || 3000;
const hostname = process.env.APP_HOST || 'localhost';

/** Create the server */
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`App is running in: ${server.address().address}:${server.address().port}`);
});
