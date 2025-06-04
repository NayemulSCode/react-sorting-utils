import { useState, useCallback, useEffect } from 'react';

/**
 * @typedef SearchResult
 * @property {boolean} found - Whether the target element was found.
 * @property {number | null} index - The index of the target element if found, otherwise null.
 */

/**
 * @typedef BinarySearchResult
 * @property {SearchResult} searchResult - The result of the search.
 * @property {() => void} search - Function to trigger the search process.
 * @property {number} timeTaken - The time taken for the search operation in milliseconds.
 * @property {number[]} originalArray - The original array that was searched (after sorting).
 */

/**
 * Performs a binary search on an array to find the index of a target element and measures the time taken.
 * The input array is sorted internally before searching.
 *
 * @param initialArray - The array to search.
 * @param target - The element to search for.
 * @returns {BinarySearchResult} An object containing the search result, the search function, the time taken, and the original array (as passed to the hook, before internal sorting for search).
 */
export const useBinarySearch = (initialArray: number[], target: number) => {
  const [originalArray, setOriginalArray] = useState<number[]>(initialArray);
  const [searchResult, setSearchResult] = useState<{ found: boolean; index: number | null }>({ found: false, index: null });
  const [timeTaken, setTimeTaken] = useState<number>(0);

  // Update originalArray state if the initialArray prop changes
  useEffect(() => {
    setOriginalArray(initialArray);
    setSearchResult({ found: false, index: null }); // Reset search result
    setTimeTaken(0); // Reset time taken
  }, [initialArray]);


  /**
   * Executes the binary search on the current originalArray for the given target.
   * The array is sorted first, then searched.
   * It records the time taken and updates searchResult and timeTaken states.
   */
  const search = useCallback(() => {
    const startTime = performance.now();

    // Binary search requires a sorted array. Sort a copy of the originalArray.
    const sortedInputArray = [...originalArray].sort((a, b) => a - b);

    let left = 0;
    let right = sortedInputArray.length - 1;
    let foundIndex: number | null = null;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedInputArray[mid] === target) {
        foundIndex = mid;
        break;
      } else if (sortedInputArray[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    const endTime = performance.now();

    if (foundIndex !== null) {
      setSearchResult({ found: true, index: foundIndex });
    } else {
      setSearchResult({ found: false, index: null });
    }
    setTimeTaken(endTime - startTime);
  }, [originalArray, target]); // Depends on originalArray state and target prop

  return { searchResult, search, timeTaken, originalArray };
};
