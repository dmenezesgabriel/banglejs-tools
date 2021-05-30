import { readFileSync } from "fs";
import { createServer } from "https";
import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
const privateKey = readFileSync("ssl/key.pem");
const certificate = readFileSync("ssl/cert.pem");
const __dirname = dirname(fileURLToPath(import.meta.url));
const credentials = { key: privateKey, cert: certificate };
const port = 8000;
const app = express();

app.use(express.static("public"));

const httpServer = createServer(credentials, app);

process.on("SIGINT", function () {
  console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");
  // some other closing procedures go here
  process.exit(1);
});

httpServer.listen(process.env.PORT || 8000);
console.log("Server started at https://localhost:" + port);
