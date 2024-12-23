import { useState } from 'react';

export const useBinarySearch = (inputArray: number[], target: number) => {
  const [index, setIndex] = useState<number | null>(null);

  const search = () => {
    const sortedArray = [...inputArray].sort((a, b) => a - b);
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedArray[mid] === target) {
        setIndex(mid);
        return;
      } else if (sortedArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    setIndex(null); // Not found
  };

  return { index, search };
};
