import { useState } from 'react';

/**
 * Sorts an array using the quick sort algorithm.
 *
 * @param inputArray - The array to sort.
 * @returns An object containing the sorted array and a sort function.
 */
export const useQuickSort = (inputArray: number[]) => {
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  /**
   * Executes the quick sort.
   * The result (sorted array) is stored in the `sortedArray` state variable.
   */
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
