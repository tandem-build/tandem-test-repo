import { content } from "./content.js";

const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/** The home page as HTML. */
export function homePage() {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>${escape(content.title)}</title></head>
<body>
  <h1>${escape(content.welcome)}</h1>
  <p>${escape(content.tagline)}</p>
</body>
</html>`;
}
