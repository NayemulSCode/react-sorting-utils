import { useState } from 'react';

export const useQuickSort = (inputArray: number[]) => {
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  const sort = () => {
    const quickSort = (arr: number[]): number[] => {
      if (arr.length <= 1) return arr;

      const pivot = arr[0];
      const left = arr.slice(1).filter(x => x < pivot);
      const right = arr.slice(1).filter(x => x >= pivot);

      return [...quickSort(left), pivot, ...quickSort(right)];
    };

    setSortedArray(quickSort(inputArray));
  };

  return { sortedArray, sort };
};