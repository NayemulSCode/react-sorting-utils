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
exports.useHeapSort = void 0;
var react_1 = require("react");
/**
 * Sorts an array using the heap sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<` and `>`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {HeapSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
var useHeapSort = function (initialArray) {
    if (initialArray === void 0) { initialArray = []; }
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)(initialArray), sortedArray = _b[0], setSortedArray = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    (0, react_1.useEffect)(function () {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    // Helper function to maintain max-heap property.
    // Assumes T is comparable. For generic T, a comparator would be needed.
    var heapify = function (arr, n, i) {
        var _a;
        var largest = i; // Initialize largest as root
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        // If left child is larger than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
        // If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
        // If largest is not root
        if (largest !== i) {
            _a = [arr[largest], arr[i]], arr[i] = _a[0], arr[largest] = _a[1]; // Swap
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    };
    // Helper function to build a max-heap.
    var buildMaxHeap = function (arr) {
        var n = arr.length;
        // Start from the last non-leaf node and heapify all nodes in reverse order
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    };
    /**
     * Executes the heap sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    var sort = (0, react_1.useCallback)(function (arrayToSort) {
        var _a;
        var currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
        }
        var arr = __spreadArray([], currentArray, true); // Work on a copy
        var n = arr.length;
        var startTime = performance.now();
        buildMaxHeap(arr);
        // Extract elements from heap one by one
        for (var i = n - 1; i > 0; i--) {
            _a = [arr[i], arr[0]], arr[0] = _a[0], arr[i] = _a[1]; // Move current root to end
            heapify(arr, i, 0); // Call max heapify on the reduced heap
        }
        var endTime = performance.now();
        setSortedArray(arr);
        setTimeTaken(endTime - startTime);
    }, [originalArray]); // Note: heapify and buildMaxHeap are stable if not redefined.
    return { sortedArray: sortedArray, sort: sort, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useHeapSort = useHeapSort;
