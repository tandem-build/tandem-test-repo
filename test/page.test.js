import { test } from "node:test";
import assert from "node:assert/strict";
import { homePage } from "../src/page.js";
import { content } from "../src/content.js";

test("the home page shows the welcome text", () => {
  assert.ok(homePage().includes(content.welcome));
});

test("the home page has a title", () => {
  assert.ok(homePage().includes("<title>Sandbox App</title>"));
});
