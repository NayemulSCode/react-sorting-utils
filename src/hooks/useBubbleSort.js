"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBubbleSort = void 0;
const react_1 = require("react");
const useBubbleSort = (inputArray) => {
    const [sortedArray, setSortedArray] = (0, react_1.useState)([]);
    const sort = () => {
        const arr = [...inputArray];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
        setSortedArray(arr);
    };
    return { sortedArray, sort };
};
exports.useBubbleSort = useBubbleSort;
