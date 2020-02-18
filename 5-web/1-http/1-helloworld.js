const http = require('http');

const requestListener = (req, res) => {
  // req, res are streams!
  console.dir(req, { depth: 0 });
  console.dir(res, { depth: 0 });
  res.end('Hello World\n');

  // equivalent to
  // res.write("Hello World\n");
  // res.end();
};
// server: http.Server
const server = http.createServer(requestListener);

// or we can do it this way
// const server = http.createServer();
// server.on("request", requestListener);

server.listen(4242, () => {
  console.log('Server is running...');
});
