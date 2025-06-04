import { useState, useCallback, useEffect } from 'react';

/**
 * Interface for the return value of the useMergeSort hook.
 * @template T The type of elements in the array.
 */
export interface MergeSortResult<T> {
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
 * Sorts an array using the merge sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {MergeSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
export const useMergeSort = <T>(initialArray: T[] = []): MergeSortResult<T> => {
  const [originalArray, setOriginalArray] = useState<T[]>(initialArray);
  const [sortedArray, setSortedArray] = useState<T[]>(initialArray);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  useEffect(() => {
    setOriginalArray(initialArray);
    setSortedArray(initialArray);
    setTimeTaken(0);
  }, [initialArray]);

  const merge = (left: T[], right: T[]): T[] => {
    const result: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      // Assuming T is number for direct comparison for this implementation.
      // For a truly generic hook with unknown T, a comparator function should be passed as an argument.
      if ((left[leftIndex] as any) < (right[rightIndex] as any)) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  };

  const mergeSortRecursive = (arr: T[]): T[] => {
    if (arr.length <= 1) {
      return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    return merge(mergeSortRecursive(leftHalf), mergeSortRecursive(rightHalf));
  };

  /**
   * Executes the merge sort.
   * If an array is provided as a parameter, it sorts that array and updates originalArray.
   * Otherwise, it sorts the current originalArray state.
   */
  const sort = useCallback((arrayToSort?: T[]) => {
    const currentArray = arrayToSort ? arrayToSort : originalArray;
    if (arrayToSort) {
      setOriginalArray(arrayToSort);
    }

    const arrCopy = [...currentArray];
    const startTime = performance.now();
    const result = mergeSortRecursive(arrCopy);
    const endTime = performance.now();

    setSortedArray(result);
    setTimeTaken(endTime - startTime);
  }, [originalArray]); // Note: merge and mergeSortRecursive are stable if not redefined.

  return { sortedArray, sort, timeTaken, originalArray };
};
