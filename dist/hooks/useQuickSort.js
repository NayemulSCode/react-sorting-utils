"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuickSort = void 0;
const react_1 = require("react");
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
const useQuickSort = (initialArray) => {
    const [originalArray, setOriginalArray] = (0, react_1.useState)(initialArray);
    const [sortedArray, setSortedArray] = (0, react_1.useState)([]);
    const [timeTaken, setTimeTaken] = (0, react_1.useState)(0);
    // Update originalArray state if the initialArray prop changes
    (0, react_1.useEffect)(() => {
        setOriginalArray(initialArray);
        setSortedArray([]); // Reset sorted array
        setTimeTaken(0); // Reset time taken
    }, [initialArray]);
    /**
     * Executes the quick sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     * It records the time taken and updates sortedArray and timeTaken states.
     */
    const sort = (0, react_1.useCallback)((arrayToSortParam) => {
        const currentArray = arrayToSortParam ? arrayToSortParam : originalArray;
        if (arrayToSortParam) {
            setOriginalArray(arrayToSortParam);
            setSortedArray([]); // Reset sortedArray if new array is provided
        }
        const startTime = performance.now();
        const arrayToSort = [...currentArray]; // Operate on a copy
        const quickSort = (arr) => {
            if (arr.length <= 1)
                return arr;
            // Using a new pivot selection strategy can be more robust,
            // but for simplicity, sticking to the original first element pivot.
            const pivot = arr[0];
            const left = [];
            const right = [];
            // Manual partition to avoid multiple .slice() and .filter() calls for performance
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                }
                else {
                    right.push(arr[i]);
                }
            }
            return [...quickSort(left), pivot, ...quickSort(right)];
        };
        const result = quickSort(arrayToSort);
        const endTime = performance.now();
        setSortedArray(result);
        setTimeTaken(endTime - startTime);
    }, [originalArray]);
    return { sortedArray, sort, timeTaken, originalArray };
};
exports.useQuickSort = useQuickSort;
