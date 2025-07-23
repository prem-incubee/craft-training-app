export function count(target: number, numbersList: number[]): number {
  let count = 0;

  for (let index = 0; index < numbersList.length; index++) {
    if (target === numbersList[index]) {
      count += 1;
    }
  }

  return count;
}
