# Stale Closure in React's useEffect Cleanup Function

This repository demonstrates a common error in React's `useEffect` hook where the cleanup function uses a stale closure, leading to unexpected behavior.  The example showcases how to correctly handle this issue.

## Bug

The bug lies in the use of `count` within the cleanup function of the `useEffect` hook. Because `count` is closed over, the value used might not reflect the current state, potentially resulting in unexpected logging or side effects.