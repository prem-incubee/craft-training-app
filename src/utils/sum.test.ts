import { sum } from "./sum";

describe.skip("sum function", () => {
  it("returns zero for empty input", () => {
    expect(sum()).toBe(0);
  });

  it("returns the number for that number", () => {
    expect(sum(4)).toBe(4);
  });

  it("returns the sum of two numbers", () => {
    expect(sum(4, 2)).toBe(6);
  });

  it("returns zero for input of multiple zeros", () => {
    expect(sum(0, 0, 0, 0)).toBe(0);
  });
});
