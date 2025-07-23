import { product } from "./product";

describe.skip("product function", () => {
  it("returns one for nothing", () => {
    expect(product()).toBe(1);
  });
  it("returns the number for that number", () => {
    expect(product(42)).toBe(42);
  });
  it("returns the product for small numbers", () => {
    expect(product(1, 2, 3)).toBe(6);
  });
  it("returns the product for small numbers", () => {
    expect(product(4, 5, 6)).toBe(120);
  });

  it("returns zero when one number is zero", () => {
    expect(product(1, 2, 0, 4)).toBe(0);
  });

  it("handles negative numbers correctly", () => {
    expect(product(-2, 3)).toBe(-6);
    expect(product(-2, -3)).toBe(6);
  });
});
