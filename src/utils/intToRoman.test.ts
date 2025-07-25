import { intToRoman } from "./intToRoman";

describe("intToRoman", () => {
  it("returns empty string for 0", () => {
    expect(intToRoman(0)).toBe("");
  });

  it("return I when given 1", () => {
    expect(intToRoman(1)).toBe("I");
  });

  it("return V when given 5", () => {
    expect(intToRoman(5)).toBe("V");
  });

  test.each([{ value: 4, expected: "IV" }])(
    "returns respective roman numeral",
    ({ value, expected }) => {
      expect(intToRoman(value)).toBe(expected);
    }
  );

  it("return XLIX when given 49", () => {
    expect(intToRoman(49)).toBe("XLIX");
  });
});
