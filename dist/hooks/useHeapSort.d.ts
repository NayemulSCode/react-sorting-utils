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
export declare const useHeapSort: <T>(initialArray?: T[]) => HeapSortResult<T>;
//# sourceMappingURL=useHeapSort.d.ts.map