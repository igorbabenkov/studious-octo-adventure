import { reverse } from "../src/index";

test("reverse", () => {
  expect(reverse("123")).toEqual("321");
  expect(reverse("")).toEqual("");
  expect(reverse("1")).toEqual("1");
});
