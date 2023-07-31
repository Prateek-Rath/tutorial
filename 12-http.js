const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
  }
  res.end(`<h1>Oops</h1>
  <p> we can't seem to find the link you are looking for</p>
  <a href="/">back home</a>`);
});

server.listen(5000);
