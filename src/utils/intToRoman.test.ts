import { intToRoman } from "./intToRoman";

describe("intToRoman", () => {

  it("returns empty string for 0", () => {
    expect(intToRoman(0)).toBe("");
  });

  it('return I when given 1',()=>{
    expect(intToRoman(1)).toBe("I");
  })

});
