# react-sorting-utils

**react-sorting-utils** is a lightweight React library that provides utility hooks for sorting and searching arrays. It includes commonly used algorithms like Bubble Sort, Quick Sort, and Binary Search, making it easy to integrate sorting functionality into your React projects. This package is beneficial for its lightweight nature, ease of use, and for providing common sorting and searching algorithms as React hooks.

## Features

- React hooks for sorting and searching arrays.
- Includes Bubble Sort, Quick Sort, and Binary Search algorithms.
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

Sort an array using the Bubble Sort algorithm.

```javascript
import { useBubbleSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort } = useBubbleSort([5, 3, 8, 4]);

  return (
    <div>
      <button onClick={sort}>Sort with Bubble Sort</button>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
    </div>
  );
};

export default App;
```

### Quick Sort

Sort an array using the Quick Sort algorithm.

```javascript
import { useQuickSort } from 'react-sorting-utils';

const App = () => {
  const { sortedArray, sort } = useQuickSort([9, 2, 7, 1]);

  return (
    <div>
      <button onClick={sort}>Sort with Quick Sort</button>
      <p>Sorted Array: {sortedArray.join(', ')}</p>
    </div>
  );
};

export default App;
```

### Binary Search

Find the index of a target element in a sorted array using Binary Search.

```javascript
import { useBinarySearch } from 'react-sorting-utils';

const App = () => {
  const { index, search } = useBinarySearch([1, 3, 5, 7], 5);

  return (
    <div>
      <button onClick={search}>Search for 5</button>
      <p>Index of 5: {index !== null ? index : 'Not Found'}</p>
    </div>
  );
};

export default App;
```

## API Reference

### `useBubbleSort(inputArray: number[])`

- **Parameters**:
  - `inputArray` - An array of numbers to sort.
- **Returns**:
  - `sortedArray` - The sorted array.
  - `sort` - A function to trigger the sorting operation.

### `useQuickSort(inputArray: number[])`

- **Parameters**:
  - `inputArray` - An array of numbers to sort.
- **Returns**:
  - `sortedArray` - The sorted array.
  - `sort` - A function to trigger the sorting operation.

### `useBinarySearch(inputArray: number[], target: number)`

- **Parameters**:
  - `inputArray` - An array of numbers to search.
  - `target` - The number to find in the array.
- **Returns**:
  - `index` - The index of the target in the sorted array, or `null` if not found.
  - `search` - A function to trigger the search operation.

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

