"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMergeSort = void 0;
const react_1 = require("react");
/**
 * Sorts an array using the merge sort algorithm and measures the time taken.
 *
 * @template T The type of elements in the array. Assumed to be comparable with `<`.
 * @param {T[]} initialArray - The initial array to be sorted. Defaults to an empty array.
 * @returns {MergeSortResult<T>} An object containing the sorted array, the sort function, time taken, and original array.
 */
const useMergeSort = (initialArray = []) => {
    const [originalArray, setOriginalArray] = (0, react_1.useState)(initialArray);
    const [sortedArray, setSortedArray] = (0, react_1.useState)(initialArray);
    const [timeTaken, setTimeTaken] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        setOriginalArray(initialArray);
        setSortedArray(initialArray);
        setTimeTaken(0);
    }, [initialArray]);
    const merge = (left, right) => {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;
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
    const mergeSortRecursive = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }
        const middle = Math.floor(arr.length / 2);
        const leftHalf = arr.slice(0, middle);
        const rightHalf = arr.slice(middle);
        return merge(mergeSortRecursive(leftHalf), mergeSortRecursive(rightHalf));
    };
    /**
     * Executes the merge sort.
     * If an array is provided as a parameter, it sorts that array and updates originalArray.
     * Otherwise, it sorts the current originalArray state.
     */
    const sort = (0, react_1.useCallback)((arrayToSort) => {
        const currentArray = arrayToSort ? arrayToSort : originalArray;
        if (arrayToSort) {
            setOriginalArray(arrayToSort);
        }
        const arrCopy = [...currentArray];
        const startTime = performance.now();
        const result = mergeSortRecursive(arrCopy);
        const endTime = performance.now();
        setSortedArray(result);
        setTimeTaken(endTime - startTime);
    }, [originalArray]); // Note: merge and mergeSortRecursive are stable if not redefined.
    return { sortedArray, sort, timeTaken, originalArray };
};
exports.useMergeSort = useMergeSort;
