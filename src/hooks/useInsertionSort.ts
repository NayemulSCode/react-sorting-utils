import { useState, useCallback, useEffect } from 'react';

/**
 * Interface for the return value of the useInsertionSort hook.
 * @template T The type of elements in the array.
 */
export interface InsertionSortResult<T> {
  /** The array after sorting. */
  sortedArray: T[];
  /** Function to trigger the sorting process. Accepts an optional array to sort; otherwise, sorts the initial array. */
  sort: (arrayToSort?: T[]) => void;
  /** The time taken for the sort operation in milliseconds. */
  timeTaken: number;
  /** The original array that was passed to the sort function or the initial array. */
  originalArray: T[];
}

/**
 * Sorts an array using the insertion sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `>` and assignment.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {InsertionSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
export const useInsertionSort = <T>(initialArray: T[] = []): InsertionSortResult<T> => {
  const [originalArray, setOriginalArray] = useState<T[]>(initialArray);
  const [sortedArray, setSortedArray] = useState<T[]>(initialArray);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  // Update states if the initialArray prop changes
  useEffect(() => {
    setOriginalArray(initialArray);
    setSortedArray(initialArray);
    setTimeTaken(0);
  }, [initialArray]);

  /**
   * Executes the insertion sort.
   * If an array is provided as a parameter, it sorts that array and updates originalArray.
   * Otherwise, it sorts the current originalArray state.
   */
  const sort = useCallback((arrayToSort?: T[]) => {
    const currentArray = arrayToSort ? arrayToSort : originalArray;
    if (arrayToSort) {
      setOriginalArray(arrayToSort);
    }

    const arr = [...currentArray]; // Work on a copy
    const n = arr.length;
    const startTime = performance.now();

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      // Assuming T is number for direct comparison for this implementation.
      // For a truly generic hook with unknown T, a comparator function should be passed as an argument.
      while (j >= 0 && (arr[j] as any) > (key as any)) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    const endTime = performance.now();

    setSortedArray(arr);
    setTimeTaken(endTime - startTime);
  }, [originalArray]);

  return { sortedArray, sort, timeTaken, originalArray };
};
