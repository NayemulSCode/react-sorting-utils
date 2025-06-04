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
exports.useBinarySearch = void 0;
var react_1 = require("react");
/**
 * @typedef SearchResult
 * @property {boolean} found - Whether the target element was found.
 * @property {number | null} index - The index of the target element if found, otherwise null.
 */
/**
 * @typedef BinarySearchResult
 * @property {SearchResult} searchResult - The result of the search.
 * @property {() => void} search - Function to trigger the search process.
 * @property {number} timeTaken - The time taken for the search operation in milliseconds.
 * @property {number[]} originalArray - The original array that was searched (after sorting).
 */
/**
 * Performs a binary search on an array to find the index of a target element and measures the time taken.
 * The input array is sorted internally before searching.
 *
 * @param initialArray - The array to search.
 * @param target - The element to search for.
 * @returns {BinarySearchResult} An object containing the search result, the search function, the time taken, and the original array (as passed to the hook, before internal sorting for search).
 */
var useBinarySearch = function (initialArray, target) {
    var _a = (0, react_1.useState)(initialArray), originalArray = _a[0], setOriginalArray = _a[1];
    var _b = (0, react_1.useState)({ found: false, index: null }), searchResult = _b[0], setSearchResult = _b[1];
    var _c = (0, react_1.useState)(0), timeTaken = _c[0], setTimeTaken = _c[1];
    // Update originalArray state if the initialArray prop changes
    (0, react_1.useEffect)(function () {
        setOriginalArray(initialArray);
        setSearchResult({ found: false, index: null }); // Reset search result
        setTimeTaken(0); // Reset time taken
    }, [initialArray]);
    /**
     * Executes the binary search on the current originalArray for the given target.
     * The array is sorted first, then searched.
     * It records the time taken and updates searchResult and timeTaken states.
     */
    var search = (0, react_1.useCallback)(function () {
        var startTime = performance.now();
        // Binary search requires a sorted array. Sort a copy of the originalArray.
        var sortedInputArray = __spreadArray([], originalArray, true).sort(function (a, b) { return a - b; });
        var left = 0;
        var right = sortedInputArray.length - 1;
        var foundIndex = null;
        while (left <= right) {
            var mid = Math.floor((left + right) / 2);
            if (sortedInputArray[mid] === target) {
                foundIndex = mid;
                break;
            }
            else if (sortedInputArray[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
        var endTime = performance.now();
        if (foundIndex !== null) {
            setSearchResult({ found: true, index: foundIndex });
        }
        else {
            setSearchResult({ found: false, index: null });
        }
        setTimeTaken(endTime - startTime);
    }, [originalArray, target]); // Depends on originalArray state and target prop
    return { searchResult: searchResult, search: search, timeTaken: timeTaken, originalArray: originalArray };
};
exports.useBinarySearch = useBinarySearch;
