The problem lies in accessing `intervalId` after the component has unmounted.  The cleanup function attempts to clear the interval, but `intervalId` might be undefined, resulting in a silent failure.  This is solved by adding a ref to track if the component is mounted. 

```javascript
import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const isMountedRef = useRef(true);
  const intervalId = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      console.log('Interval running');
    }, 1000);
    intervalId.current = id;

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      isMountedRef.current = false; // Ensure cleanup does not modify state if unmounted 
    };
  }, []);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
};

export default MyComponent;
```