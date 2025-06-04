import { useState, useCallback, useEffect } from 'react';

/**
 * Interface for the return value of the useHeapSort hook.
 * @template T The type of elements in the array.
 */
export interface HeapSortResult<T> {
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
 * Sorts an array using the heap sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<` and `>`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {HeapSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
export const useHeapSort = <T>(initialArray: T[] = []): HeapSortResult<T> => {
  const [originalArray, setOriginalArray] = useState<T[]>(initialArray);
  const [sortedArray, setSortedArray] = useState<T[]>(initialArray);
  const [timeTaken, setTimeTaken] = useState<number>(0);

  useEffect(() => {
    setOriginalArray(initialArray);
    setSortedArray(initialArray);
    setTimeTaken(0);
  }, [initialArray]);

  // Helper function to maintain max-heap property.
  // Assumes T is comparable. For generic T, a comparator would be needed.
  const heapify = (arr: T[], n: number, i: number) => {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child is larger than root
    if (left < n && (arr[left] as any) > (arr[largest] as any)) {
      largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && (arr[right] as any) > (arr[largest] as any)) {
      largest = right;
    }

    // If largest is not root
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
    }
  };

  // Helper function to build a max-heap.
  const buildMaxHeap = (arr: T[]) => {
    const n = arr.length;
    // Start from the last non-leaf node and heapify all nodes in reverse order
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  };

  /**
   * Executes the heap sort.
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

    buildMaxHeap(arr);

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
      heapify(arr, i, 0); // Call max heapify on the reduced heap
    }
    const endTime = performance.now();

    setSortedArray(arr);
    setTimeTaken(endTime - startTime);
  }, [originalArray]); // Note: heapify and buildMaxHeap are stable if not redefined.

  return { sortedArray, sort, timeTaken, originalArray };
};
