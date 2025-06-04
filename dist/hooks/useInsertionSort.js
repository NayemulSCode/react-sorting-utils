"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInsertionSort = void 0;
const react_1 = require("react");
/**
 * Sorts an array using the insertion sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `>` and assignment.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {InsertionSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
const useInsertionSort = (initialArray = []) => {
    const [originalArray, setOriginalArray] = (0, react_1.useState)(initialArray);
    const [sortedArray, setSortedArray] = (0, react_1.useState)(initialArray);
    const [timeTaken, setTimeTaken] = (0, react_1.useState)(0);
    // Update states if the initialArray prop changes
    (0, react_1.useEffect)(() => {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    /**
     * Executes the insertion sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    const sort = (0, react_1.useCallback)((arrayToSort) => {
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
            while (j >= 0 && arr[j] > key) {
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
exports.useInsertionSort = useInsertionSort;
