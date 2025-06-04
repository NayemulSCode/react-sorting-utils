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
exports.useQuickSort = void 0;
var react_1 = require("react");
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
var useQuickSort = function (initialArray) {
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)([]), sortedArray = _b[0], setSortedArray = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    // Update originalArray state if the initialArray prop changes
    (0, react_1.useEffect)(function () {
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
    var sort = (0, react_1.useCallback)(function (arrayToSortParam) {
        var currentArray = arrayToSortParam ? arrayToSortParam : originalArray;
        if (arrayToSortParam) {
            setOriginalArray(arrayToSortParam);
            setSortedArray([]); // Reset sortedArray if new array is provided
        }
        var startTime = performance.now();
        var arrayToSort = __spreadArray([], currentArray, true); // Operate on a copy
        var quickSort = function (arr) {
            if (arr.length <= 1)
                return arr;
            // Using a new pivot selection strategy can be more robust,
            // but for simplicity, sticking to the original first element pivot.
            var pivot = arr[0];
            var left = [];
            var right = [];
            // Manual partition to avoid multiple .slice() and .filter() calls for performance
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < pivot) {
                    left.push(arr[i]);
                }
                else {
                    right.push(arr[i]);
                }
            }
            return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
        };
        var result = quickSort(arrayToSort);
        var endTime = performance.now();
        setSortedArray(result);
        setTimeTaken(endTime - startTime);
    }, [originalArray]);
    return { sortedArray: sortedArray, sort: sort, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useQuickSort = useQuickSort;
