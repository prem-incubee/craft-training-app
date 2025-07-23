export function product(...numbers: number[]) {
  let product = 1;
  for (const number of numbers) {
    product *= number;
  }
  return product;
}
