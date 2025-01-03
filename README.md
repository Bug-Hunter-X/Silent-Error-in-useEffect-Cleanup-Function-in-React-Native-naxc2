# Silent Error in useEffect Cleanup Function

This repository demonstrates a common, yet silent, error that can occur when using the `useEffect` hook in React Native.  The issue arises when a cleanup function within `useEffect` throws an error after the component unmounts. This error, often related to accessing stale state or props, goes unreported, making debugging difficult.

The `useEffectCleanupBug.js` file showcases the problematic code.  The `useEffectCleanupSolution.js` file provides a corrected version demonstrating how to prevent this type of error.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app (using your preferred React Native method).  Observe that no error is explicitly displayed, even though the bug exists.
4. Compare `useEffectCleanupBug.js` to `useEffectCleanupSolution.js` to see the solution.

## Solution
The solution involves checking if the component is still mounted before accessing and modifying state or props inside the cleanup function.  This is accomplished using a ref to track the mounted status. 