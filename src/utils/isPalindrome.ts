export function isPalindrome(str: string) {
  const sanitizedString = sanitizeString(str);

  const graphemes = createGraphemes(sanitizedString);

  return graphemes.join("") === [...graphemes].reverse().join("");
}

function sanitizeString(str: string) {
  return str.replace(/ /gu, "").toLowerCase();
}

function createGraphemes(str: string) {
  const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  return Array.from(segmenter.segment(str), (seg) => seg.segment);
}
