const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url.startsWith("/content")) {
    let file = req.url.slice(1);
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
  } else if (req.url.startsWith("/api")) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
      command: "az version",
      result: "Mostra a versão do Azure CLI"
    }))
  } else {
    res.writeHead(404, { 'Content-type': 'text/plain' })
    res.end("Rota não mapeada");
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor em execução: http://localhost:${port}`);
});
