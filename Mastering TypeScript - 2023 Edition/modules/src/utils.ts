export const add = (x: number, y: number): number => {
  return x + y;
};

export const sample = <T>(arr: T[]): T => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};
