import { createServer } from "https";
import { readFileSync, createReadStream } from "fs";

const option = {
  key: readFileSync("key.pem"),
  cert: readFileSync("cert.pem"),
};

const server = createServer(option, function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  createReadStream("index.html").pipe(res);
});

server.listen(process.env.PORT || 8000);
