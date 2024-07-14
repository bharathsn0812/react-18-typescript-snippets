import React, { useEffect, useState } from 'react';

const CleanupFunctions: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Effect to set up a timer
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default CleanupFunctions;
