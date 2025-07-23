import { max } from "./max";

describe.skip("max", () => {
  it("returns undefined for an empty array", () => {
    expect(max([])).toBeUndefined();
  });

  it("returns one for array: [1]", () => {
    expect(max([1])).toBe(1);
  });

  it("returns three for array: [1,2,3]", () => {
    expect(max([1, 2, 3])).toBe(3);
  });

  it("returns three for array: [42,62,31,18]", () => {
    expect(max([42, 62, 31, 18])).toBe(62);
  });
});
