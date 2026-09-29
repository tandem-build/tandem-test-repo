import { createServer } from "node:http";
import { homePage } from "./page.js";

const port = Number(process.env.PORT) || 3000;
createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.end(homePage());
}).listen(port, () => console.log(`Sandbox App on http://localhost:${port}`));
