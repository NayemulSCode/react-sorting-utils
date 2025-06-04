"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectionSort = void 0;
const react_1 = require("react");
/**
 * Sorts an array using the selection sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {SelectionSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
const useSelectionSort = (initialArray = []) => {
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
     * Executes the selection sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    const sort = (0, react_1.useCallback)((arrayToSort) => {
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
                if (arr[j] < arr[minIndex]) {
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
exports.useSelectionSort = useSelectionSort;
