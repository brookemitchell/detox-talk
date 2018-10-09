import { getSubdomain } from "small-imaginary-functions";

test("gets sub domain from url", () => {
  expect(getSubdomain("https://test.importantcompany.com")).toEqual("test");
});
