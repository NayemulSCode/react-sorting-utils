/**
 * @typedef QuickSortResult
 * @property {number[]} sortedArray - The array after sorting.
 * @property {() => void} sort - Function to trigger the sorting process.
 * @property {number} timeTaken - The time taken for the sort operation in milliseconds.
 * @property {number[]} originalArray - The original array that was sorted.
 */
/**
 * Sorts an array using the quick sort algorithm and measures the time taken.
 *
 * @param initialArray - The array to sort.
 * @returns {QuickSortResult} An object containing the sorted array, the sort function, the time taken, and the original array.
 */
export declare const useQuickSort: (initialArray: number[]) => {
    sortedArray: number[];
    sort: (arrayToSortParam?: number[]) => void;
    timeTaken: number;
    originalArray: number[];
};
//# sourceMappingURL=useQuickSort.d.ts.map