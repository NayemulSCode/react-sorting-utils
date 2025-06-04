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
exports.useMergeSort = void 0;
var react_1 = require("react");
/**
 * Sorts an array using the merge sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {MergeSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
var useMergeSort = function (initialArray) {
    if (initialArray === void 0) { initialArray = []; }
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)(initialArray), sortedArray = _b[0], setSortedArray = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    (0, react_1.useEffect)(function () {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    var merge = function (left, right) {
        var result = [];
        var leftIndex = 0;
        var rightIndex = 0;
        while (leftIndex < left.length && rightIndex < right.length) {
            // Assuming T is number for direct comparison for this implementation.
            // For a truly generic hook with unknown T, a comparator function should be passed as an argument.
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
            else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    };
    var mergeSortRecursive = function (arr) {
        if (arr.length <= 1) {
            return arr;
        }
        var middle = Math.floor(arr.length / 2);
        var leftHalf = arr.slice(0, middle);
        var rightHalf = arr.slice(middle);
        return merge(mergeSortRecursive(leftHalf), mergeSortRecursive(rightHalf));
    };
    /**
     * Executes the merge sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    var sort = (0, react_1.useCallback)(function (arrayToSort) {
        var currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
        }
        var arrCopy = __spreadArray([], currentArray, true);
        var startTime = performance.now();
        var result = mergeSortRecursive(arrCopy);
        var endTime = performance.now();
        setSortedArray(result);
        setTimeTaken(endTime - startTime);
    }, [originalArray]); // Note: merge and mergeSortRecursive are stable if not redefined.
    return { sortedArray: sortedArray, sort: sort, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useMergeSort = useMergeSort;
