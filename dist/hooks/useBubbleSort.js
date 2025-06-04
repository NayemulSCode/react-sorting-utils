"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBubbleSort = void 0;
const react_1 = require("react");
/**
 * @typedef BubbleSortResult
 * @property {number[]} sortedArray - The array after sorting.
 * @property {() => void} sort - Function to trigger the sorting process.
 * @property {number} timeTaken - The time taken for the sort operation in milliseconds.
 * @property {number[]} originalArray - The original array that was sorted.
 */
/**
 * Sorts an array using the bubble sort algorithm and measures the time taken.
 *
 * @param initialArray - The array to sort.
 * @returns {BubbleSortResult} An object containing the sorted array, the sort function, the time taken, and the original array.
 */
const useBubbleSort = (initialArray) => {
    const [originalArray, setOriginalArray] = (0, react_1.useState)(initialArray);
    const [sortedArray, setSortedArray] = (0, react_1.useState)([]);
    const [timeTaken, setTimeTaken] = (0, react_1.useState)(0);
    // Update originalArray state if the initialArray prop changes
    (0, react_1.useEffect)(() => {
        setOriginalArray(initialArray);
        setSortedArray([]); // Reset sorted array when input changes; or set to initialArray if preferred before sort
        setTimeTaken(0); // Reset time taken
    }, [initialArray]);
    /**
     * Executes the bubble sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     * It records the time taken and updates sortedArray and timeTaken states.
     */
    const sort = (0, react_1.useCallback)((arrayToSort) => {
        const currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
            // Also reset sortedArray to this new originalArray or [] if a new array is provided for sorting
            setSortedArray([]);
        }
        const startTime = performance.now();
        const arr = [...currentArray]; // Sort a copy
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        const endTime = performance.now();
        setSortedArray(arr);
        setTimeTaken(endTime - startTime);
    }, [originalArray]);
    return { sortedArray, sort, timeTaken, originalArray };
};
exports.useBubbleSort = useBubbleSort;
