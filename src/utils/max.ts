export function max(numbers: number[]) {
  if (numbers.length === 0) return undefined;

  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (maxNumber < numbers[i]) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}
