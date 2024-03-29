import { readable } from "svelte/store";

let count = 0;

const timer = readable(count, (set) => {
  const interval = setInterval(() => {
    count++;
    set(count);
  }, 1000);

  return () => {
    clearInterval(interval);
  };
});

export { timer };
