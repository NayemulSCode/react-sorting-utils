"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBubbleSort = void 0;
var react_1 = require("react");
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
var useBubbleSort = function (initialArray) {
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)([]), sortedArray = _b[0], setSortedArray = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    // Update originalArray state if the initialArray prop changes
    (0, react_1.useEffect)(function () {
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
    var sort = (0, react_1.useCallback)(function (arrayToSort) {
        var _a;
        var currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
            // Also reset sortedArray to this new originalArray or [] if a new array is provided for sorting
            setSortedArray([]);
        }
        var startTime = performance.now();
        var arr = __spreadArray([], currentArray, true); // Sort a copy
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                }
            }
        }
        var endTime = performance.now();
        setSortedArray(arr);
        setTimeTaken(endTime - startTime);
    }, [originalArray]);
    return { sortedArray: sortedArray, sort: sort, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useBubbleSort = useBubbleSort;
