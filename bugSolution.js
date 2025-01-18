```javascript
// Inside a React functional component
const [count, setCount] = useState(0);

useEffect(() => {
  // Correct: Capture the current count using a ref
  const countRef = useRef(count);
  return () => {
    console.log('Cleanup:', countRef.current); // Use the captured value
  };
}, []);
```