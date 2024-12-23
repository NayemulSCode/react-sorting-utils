# react-sorting-utils

**react-sorting-utils** is a lightweight React library that provides utility hooks for sorting and searching arrays. It includes commonly used algorithms like Bubble Sort, Quick Sort, and Binary Search, making it easy to integrate sorting functionality into your React projects.

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

### Prerequisites

Ensure you have Node.js and npm installed.

### Build the Project

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

### Run Tests

Coming soon.

## Contributing

Contributions are welcome! Please submit issues and pull requests for any improvements or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to the open-source community for inspiration and guidance.

