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
export declare const useBinarySearch: (initialArray: number[], target: number) => {
    searchResult: {
        found: boolean;
        index: number | null;
    };
    search: () => void;
    timeTaken: number;
    originalArray: number[];
};
//# sourceMappingURL=useBinarySearch.d.ts.map