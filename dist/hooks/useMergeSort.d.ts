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
export declare const useMergeSort: <T>(initialArray?: T[]) => MergeSortResult<T>;
//# sourceMappingURL=useMergeSort.d.ts.map