const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.write(fs.readFileSync("employee.json"));
    res.end();
  } else if (req.method === "POST") {
    fs.appendFile("employee.json", () => {
      res.write("hello worls");
    });
    res.end();
  } else {
    res.writeHead(405, { "content-type": "application/json" });
    res.end();
  }
});

server.listen(8000, () => {
  console.log("listening to the port 8000");
});
