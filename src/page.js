import { content, aboutContent } from "./content.js";

const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

/** The home page as HTML. */
export function homePage() {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>${escape(content.title)}</title></head>
<body>
  <h1>${escape(content.welcome)}</h1>
  <p>${escape(content.tagline)}</p>
  <p><a href="/about">${escape(content.aboutLink)}</a></p>
</body>
</html>`;
}

/** The About page as HTML. */
export function aboutPage() {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"><title>${escape(aboutContent.title)}</title></head>
<body>
  <h1>${escape(aboutContent.heading)}</h1>
  <p>${escape(aboutContent.line)}</p>
  <p><a href="/">${escape(aboutContent.homeLink)}</a></p>
</body>
</html>`;
}
