import { getKey } from "./helpers";
import { expect, test } from "vitest";

test("getKey", () => {
  expect(getKey("foo", 1)).toBe("foo-1");
});
