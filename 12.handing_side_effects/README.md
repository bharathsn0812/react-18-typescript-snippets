### Explanation

1.  **Fetching Data with useEffect**:
    
    -   This component fetches data from an API when it mounts using the `useEffect` hook.
    -   The empty dependency array `[]` ensures the effect runs only once after the initial render.
    -   The fetched data is stored in the component's state.
2.  **Cleanup Functions**:
    
    -   This component demonstrates the use of cleanup functions in `useEffect`.
    -   A timer is set up to increment a count every second.
    -   The cleanup function clears the timer to avoid memory leaks when the component unmounts.
3.  **Handling Async Operations**:
    
    -   This component handles async operations inside `useEffect`.
    -   Similar to the first example, it fetches data from an API.
    -   Proper error handling is included to catch any errors during the fetch operation.

These examples cover the basic usage of `useEffect` for handling side effects, including fetching data, performing cleanups, and handling asynchronous operations in React with TypeScript and TSX.
