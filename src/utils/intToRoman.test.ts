import { intToRoman } from "./intToRoman";

describe("intToRoman", () => {
  it("returns empty string for 0", () => {
    expect(intToRoman(0)).toBe("");
  });
});
