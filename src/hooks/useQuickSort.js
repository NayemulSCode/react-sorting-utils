"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuickSort = void 0;
const react_1 = require("react");
const useQuickSort = (inputArray) => {
    const [sortedArray, setSortedArray] = (0, react_1.useState)([]);
    const sort = () => {
        const quickSort = (arr) => {
            if (arr.length <= 1)
                return arr;
            const pivot = arr[0];
            const left = arr.slice(1).filter(x => x < pivot);
            const right = arr.slice(1).filter(x => x >= pivot);
            return [...quickSort(left), pivot, ...quickSort(right)];
        };
        setSortedArray(quickSort(inputArray));
    };
    return { sortedArray, sort };
};
exports.useQuickSort = useQuickSort;
