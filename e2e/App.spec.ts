import { test, expect } from "@playwright/test";

test("Add item to ToDo", async ({ page }) => {
  await page.goto("http://localhost:5174/");

  const btn = page.getByText("Add a todo");
  const list = page.getByTestId("list");
  const input = page.getByPlaceholder("E.g. feed the cat");

  await input.fill("Feed the cat");
  await btn.click();

  await expect(list).toHaveCount(1);
  await expect(list).toHaveText("Feed the cat");
});
