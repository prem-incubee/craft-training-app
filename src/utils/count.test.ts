import { count } from "./count";
describe.skip("count", () => {
  it("returns zero for empty array", () => {
    expect(count(1, [])).toBe(0);
  });

  it("returns one for array: [1] ", () => {
    expect(count(1, [1])).toBe(1);
  });

  it("returns two for array: [1,2,1] ", () => {
    expect(count(1, [1, 2, 1])).toBe(2);
  });

  it("returns zero for array: [1,2,1] ", () => {
    expect(count(6, [1, 2, 1])).toBe(0);
  });
});
