import { useState, useCallback, useEffect } from 'react';

/**
 * Interface for the return value of the useSelectionSort hook.
 * @template T The type of elements in the array.
 */
export interface SelectionSortResult<T> {
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
 * Sorts an array using the selection sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {SelectionSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
export const useSelectionSort = <T>(initialArray: T[] = []): SelectionSortResult<T> => {
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
   * Executes the selection sort.
   * If an array is provided as a parameter, it sorts that array and updates originalArray.
   * Otherwise, it sorts the current originalArray state.
   */
  const sort = useCallback((arrayToSort?: T[]) => {
    const currentArray = arrayToSort ? arrayToSort : originalArray;
    if (arrayToSort) {
      setOriginalArray(arrayToSort);
    }

    const arr = [...currentArray];
    const n = arr.length;
    const startTime = performance.now();

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        // Assuming T is number for direct comparison for this implementation.
        // For a truly generic hook with unknown T, a comparator function should be passed as an argument.
        if ((arr[j] as any) < (arr[minIndex] as any)) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    const endTime = performance.now();

    setSortedArray(arr);
    setTimeTaken(endTime - startTime);
  }, [originalArray]);

  return { sortedArray, sort, timeTaken, originalArray };
};
