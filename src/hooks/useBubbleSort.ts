import { useState } from 'react';

/**
 * Sorts an array using the bubble sort algorithm.
 *
 * @param inputArray - The array to sort.
 * @returns An object containing the sorted array and a sort function.
 */
export const useBubbleSort = (inputArray: number[]) => {
  const [sortedArray, setSortedArray] = useState<number[]>([]);

  /**
   * Executes the bubble sort.
   * The result (sorted array) is stored in the `sortedArray` state variable.
   */
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
