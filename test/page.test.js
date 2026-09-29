import { test } from "node:test";
import assert from "node:assert/strict";
import { homePage, aboutPage } from "../src/page.js";
import { content, aboutContent } from "../src/content.js";

test("the home page shows the welcome text", () => {
  assert.ok(homePage().includes(content.welcome));
});

test("the home page has a title", () => {
  assert.ok(homePage().includes("<title>Sandbox App</title>"));
});

test("the home page links to the About page", () => {
  assert.ok(homePage().includes('<a href="/about">'));
});

test("the About page shows its heading, line and title", () => {
  const html = aboutPage();
  assert.ok(html.includes("<h1>About</h1>"));
  assert.ok(html.includes(aboutContent.line));
  assert.ok(html.includes("<title>About – Sandbox App</title>"));
});
