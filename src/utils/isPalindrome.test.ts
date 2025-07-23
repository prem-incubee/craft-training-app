import { isPalindrome } from "./isPalindrome";

describe.skip("isPalindrome", () => {
  it("returns true for empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("returns true for madam", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  it("returns true for Madam", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });

  it("returns true for Was it a car or a cat I saw", () => {
    expect(isPalindrome("Was  it a car  or a cat I saw")).toBe(true);
  });

  it("returns false for Incubyte", () => {
    expect(isPalindrome("Incubyte")).toBe(false);
  });

  it("returns true for ✌🏻", () => {
    expect(isPalindrome("✌🏻")).toBe(true);
  });

  it("returns false for ✌🏻👀", () => {
    expect(isPalindrome("✌🏻👀")).toBe(false);
  });
  it("returns true for 上海自來水來自海上", () => {
    expect(isPalindrome("上海自來水來自海上")).toBe(true);
  });
  it("returns true for 上海的自來水來自海上", () => {
    expect(isPalindrome("上海的自來水來自海上")).toBe(false);
  });
  it.skip("returns true for Eine güldne, gute Tugend: Lüge nie!", () => {
    expect(isPalindrome("Eine güldne, gute Tugend: Lüge nie!")).toBe(true);
  });
});
