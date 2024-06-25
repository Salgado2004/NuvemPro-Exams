const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let file = "content"+req.url;
  console.log(file);
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.readFile(file, (error, content) => {
    if (error) {
      res.writeHead(404, { 'Content-type': 'text/plain' })
      res.end(error.message);
    } else {
      setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(content)
      }, 500);
    }
  })
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor em execução: http://localhost:${port}`);
});
