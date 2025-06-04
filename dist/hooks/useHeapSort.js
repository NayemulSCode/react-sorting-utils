"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHeapSort = void 0;
const react_1 = require("react");
/**
 * Sorts an array using the heap sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<` and `>`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {HeapSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
const useHeapSort = (initialArray = []) => {
    const [originalArray, setOriginalArray] = (0, react_1.useState)(initialArray);
    const [sortedArray, setSortedArray] = (0, react_1.useState)(initialArray);
    const [timeTaken, setTimeTaken] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    // Helper function to maintain max-heap property.
    // Assumes T is comparable. For generic T, a comparator would be needed.
    const heapify = (arr, n, i) => {
        let largest = i; // Initialize largest as root
        const left = 2 * i + 1;
        const right = 2 * i + 2;
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
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    };
    // Helper function to build a max-heap.
    const buildMaxHeap = (arr) => {
        const n = arr.length;
        // Start from the last non-leaf node and heapify all nodes in reverse order
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    };
    /**
     * Executes the heap sort.
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
        buildMaxHeap(arr);
        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]]; // Move current root to end
            heapify(arr, i, 0); // Call max heapify on the reduced heap
        }
        const endTime = performance.now();
        setSortedArray(arr);
        setTimeTaken(endTime - startTime);
    }, [originalArray]); // Note: heapify and buildMaxHeap are stable if not redefined.
    return { sortedArray, sort, timeTaken, originalArray };
};
exports.useHeapSort = useHeapSort;
