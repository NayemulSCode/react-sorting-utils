import { useState } from 'react';

/**
 * Performs a binary search on a sorted array to find the index of a target element.
 *
 * @param inputArray - The array to search. It will be sorted before searching.
 * @param target - The element to search for.
 * @returns An object containing the index of the target element (or null if not found) and a search function.
 */
export const useBinarySearch = (inputArray: number[], target: number) => {
  const [index, setIndex] = useState<number | null>(null);

  /**
   * Executes the binary search.
   * The result (index of the target or null) is stored in the `index` state variable.
   */
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
