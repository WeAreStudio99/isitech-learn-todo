import App from "./App";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

test("Add item to ToDo", async () => {
  render(<App />);
  const user = userEvent.setup();
  const btn = screen.getByText("Add a todo");
  const list = screen.getByTestId("list");
  const input = screen.getByPlaceholderText("E.g. feed the cat");

  await user.type(input, "Feed the cat");
  await user.click(btn);

  expect(list.children.length).toBe(1);
  expect(list.children[0].textContent).toBe("Feed the cat");
});
