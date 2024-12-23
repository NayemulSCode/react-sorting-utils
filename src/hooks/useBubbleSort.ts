import { useState } from 'react';

export const useBubbleSort = (inputArray: number[]) => {
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  const sort = () => {
    const arr = [...inputArray];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    setSortedArray(arr);
  };

  return { sortedArray, sort };
};
