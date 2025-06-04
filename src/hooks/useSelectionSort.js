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
exports.useSelectionSort = void 0;
var react_1 = require("react");
/**
 * Sorts an array using the selection sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {SelectionSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
var useSelectionSort = function (initialArray) {
    if (initialArray === void 0) { initialArray = []; }
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)(initialArray), sortedArray = _b[0], setSortedArray = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    // Update states if the initialArray prop changes
    (0, react_1.useEffect)(function () {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    /**
     * Executes the selection sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    var sort = (0, react_1.useCallback)(function (arrayToSort) {
        var _a;
        var currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
        }
        var arr = __spreadArray([], currentArray, true);
        var n = arr.length;
        var startTime = performance.now();
        for (var i = 0; i < n - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < n; j++) {
                // Assuming T is number for direct comparison for this implementation.
                // For a truly generic hook with unknown T, a comparator function should be passed as an argument.
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex !== i) {
                _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1];
            }
        }
        var endTime = performance.now();
        setSortedArray(arr);
        setTimeTaken(endTime - startTime);
    }, [originalArray]);
    return { sortedArray: sortedArray, sort: sort, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useSelectionSort = useSelectionSort;
