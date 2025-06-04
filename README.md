# react-sorting-utils

**react-sorting-utils** is a lightweight React library that provides utility hooks for sorting and searching arrays. It includes commonly used algorithms like Bubble Sort, Quick Sort, and Binary Search, making it easy to integrate sorting functionality into your React projects. This package is beneficial for its lightweight nature, ease of use, and for providing common sorting and searching algorithms as React hooks.

## Features

- React hooks for sorting and searching arrays.
- Includes Bubble Sort, Quick Sort, Selection Sort, Insertion Sort, Merge Sort, Heap Sort, and Binary Search algorithms.
- Provides performance metrics (time taken) for each operation.
- Returns both the original and sorted/searched arrays.
- Easy to use and integrate into any React project.
- Lightweight and efficient.

## Installation

Install the package using npm:

```bash
npm install react-sorting-utils
```

Or using yarn:

```bash
yarn add react-sorting-utils
```

**Important Note on Usage:**

This package distributes TypeScript source files directly. This means your project's build process will need to compile these files. If you are using TypeScript in your project, you'll need to ensure your setup can handle `.ts` files from `node_modules/react-sorting-utils/src`.

Here are some general guidelines:
- **tsconfig.json:** Ensure your project's `tsconfig.json` is configured to process files from `node_modules`. You might need to adjust `include` patterns or ensure options like `esModuleInterop: true`, `jsx: "react-jsx"` (or `"preserve"`), and `allowJs: true` (if you have mixed JS/TS in `node_modules`) are appropriately set. Some projects might need to explicitly include the path to this package's source in their `tsconfig.json`'s `include` array if their bundler doesn't pick it up automatically.
- **Bundler Configuration (Webpack, Parcel, etc.):**
    - If you're using a bundler like Webpack, ensure `ts-loader`, `babel-loader` (with `@babel/preset-typescript`), or a similar loader is configured to transpile `.ts` (and potentially `.tsx`) files from this package.
    - For example, your Webpack rule for TypeScript might need to be adjusted to include files from `node_modules/react-sorting-utils`.
- **Create React App (CRA) / Next.js / etc.:** Modern React frameworks often handle TypeScript from `node_modules` automatically or with minimal configuration. However, if you encounter issues, consult their documentation for compiling dependencies.

The import statements for hooks remain the same as shown below, as `package.json`'s `main` field points to `src/index.ts`.

## Usage

### Bubble Sort

Sorts an array using the Bubble Sort algorithm.

```javascript
import { useBubbleSort } from 'react-sorting-utils';

const App = () => {
  // Initialize with an array, e.g., [5, 3, 8, 4, 6]
  const { sortedArray, sort, timeTaken, originalArray } = useBubbleSort([5, 3, 8, 4, 6]);

  const handleSort = () => {
    // Optionally pass a new array to sort, otherwise it sorts the initialArray
    // sort([1, 7, 2, 5]);
    sort();
  };

  return (
    <div>
      <button onClick={handleSort}>Sort with Bubble Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Quick Sort

Sorts an array using the Quick Sort algorithm.

```javascript
import { useQuickSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort, timeTaken, originalArray } = useQuickSort([9, 2, 7, 1, 5, 0]);

  return (
    <div>
      <button onClick={sort}>Sort with Quick Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Selection Sort

Sorts an array using the Selection Sort algorithm. Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list.

```javascript
import { useSelectionSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort, timeTaken, originalArray } = useSelectionSort([64, 25, 12, 22, 11]);

  return (
    <div>
      <button onClick={sort}>Sort with Selection Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Insertion Sort

Sorts an array using the Insertion Sort algorithm. Insertion sort iterates through an input array and removes one element per iteration, finds the place the element belongs in the array, and then places it there.

```javascript
import { useInsertionSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort, timeTaken, originalArray } = useInsertionSort([12, 11, 13, 5, 6]);

  return (
    <div>
      <button onClick={sort}>Sort with Insertion Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Merge Sort

Sorts an array using the Merge Sort algorithm. Merge sort is a divide-and-conquer algorithm that divides the array into smaller subarrays, sorts them, and then merges them back together.

```javascript
import { useMergeSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort, timeTaken, originalArray } = useMergeSort([38, 27, 43, 3, 9, 82, 10]);

  return (
    <div>
      <button onClick={sort}>Sort with Merge Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Heap Sort

Sorts an array using the Heap Sort algorithm. Heap sort is a comparison-based sorting technique based on a Binary Heap data structure. It is similar to selection sort where we first find the maximum element and place the maximum element at the end. We repeat the same process for the remaining elements.

```javascript
import { useHeapSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort, timeTaken, originalArray } = useHeapSort([12, 11, 13, 5, 6, 7]);

  return (
    <div>
      <button onClick={sort}>Sort with Heap Sort</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
    </div>
  );
};

export default App;
```

### Binary Search

Finds the index of a target element in an array using Binary Search. The hook internally sorts a copy of the array before searching.

```javascript
import { useBinarySearch } from 'react-sorting-utils';

const App = () => {
  // Example: Search for 5 in the array [1, 3, 5, 7, 9, 0, 2]
  // Target element is 5
  const { searchResult, search, timeTaken, originalArray } = useBinarySearch([1, 3, 5, 7, 9, 0, 2], 5);

  return (
    <div>
      <button onClick={search}>Search for 5</button>
      <p>Original Array: {originalArray.join(', ')}</p>
      {searchResult.found ? (
        <p>Element found at index: {searchResult.index}</p>
      ) : (
        <p>Element not found.</p>
      )}
      <p>Time Taken: {timeTaken.toFixed(2)} ms</p>
      <p style={{ fontSize: '0.8em', marginTop: '10px' }}>
        Note: The <code>timeTaken</code> for <code>useBinarySearch</code> includes the time to internally sort the input array before searching.
      </p>
    </div>
  );
};

export default App;
```

## API Reference

All sorting hooks (`useBubbleSort`, `useQuickSort`, `useSelectionSort`, `useInsertionSort`, `useMergeSort`, `useHeapSort`) share a similar API structure.

### Sorting Hooks (Common Structure)

-   **Parameters**:
    -   `initialArray: T[]` (Optional): The initial array to sort. Defaults to an empty array.
-   **Returns**: An object with the following properties:
    -   `sortedArray: T[]`: The array after the sort operation has been performed. Initially same as `initialArray` or empty if `sort` hasn't been called on a different array.
    -   `sort: (arrayToSort?: T[]) => void`: A function to trigger the sorting process.
        -   If `arrayToSort` is provided, it sorts this new array and updates `originalArray`.
        -   If no argument is provided, it sorts the array passed as `initialArray` (or the last array passed to `sort`).
    -   `timeTaken: number`: The time taken for the most recent sort operation in milliseconds.
    -   `originalArray: T[]`: The array that was most recently subjected to the sorting operation (either `initialArray` or the array passed to `sort`).

### `useBinarySearch<T>(initialArray: T[], target: T)`

-   **Parameters**:
    -   `initialArray: T[]`: The array to search within.
    -   `target: T`: The element to search for.
-   **Returns**: An object with the following properties:
    -   `searchResult: { found: boolean; index: number | null }`: An object indicating if the target was found and its index if so.
    -   `search: () => void`: A function to trigger the search process.
    -   `timeTaken: number`: The time taken for the search operation in milliseconds. This includes the time to internally sort a copy of `initialArray`.
    -   `originalArray: T[]`: The `initialArray` passed to the hook.

## Development

This package is distributed as TypeScript source. If you're contributing to this package, you can use `tsc` for type checking locally. There is no build step required to publish the package as it's consumed directly as source.

### Prerequisites

Ensure you have Node.js and npm installed to manage dependencies and run local type checks.

### Run Tests

Coming soon.

## Contributing

Contributions are welcome! Please submit issues and pull requests for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the open-source community for inspiration and guidance.

