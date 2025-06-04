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
export declare const useInsertionSort: <T>(initialArray?: T[]) => InsertionSortResult<T>;
//# sourceMappingURL=useInsertionSort.d.ts.map