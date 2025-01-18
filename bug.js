```javascript
// Inside a React functional component
const [count, setCount] = useState(0);

useEffect(() => {
  // Incorrect: Using count directly in the cleanup function
  return () => {
    console.log('Cleanup:', count); // count might be stale
  };
}, []);
```