const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  //   res.write("welcome  to our home page");
  //   res.end();
  if (req.url === "/about") {
    res.end("here is our short list");
  }
  res.end(
    `<h1>opps !</h1><p>we can't seem the page to find the page looking for</p>
    <a href="/">backhome</a>`
  );
});
server.listen(5000);
