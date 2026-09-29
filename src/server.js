import { createServer } from "node:http";
import { homePage, aboutPage } from "./page.js";

const port = Number(process.env.PORT) || 3000;
createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const path = new URL(req.url, "http://localhost").pathname;
  res.end(path === "/about" ? aboutPage() : homePage());
}).listen(port, () => console.log(`Sandbox App on http://localhost:${port}`));
