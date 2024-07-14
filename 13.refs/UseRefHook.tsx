// UseRefHook.tsx
// This file demonstrates how to use the useRef hook in functional components.

import React, { useRef, useEffect } from 'react';

const UseRefHook = () => {
  // useRef hook to create a ref
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Access the DOM element after the component has rendered
    if (myRef.current) {
      console.log(myRef.current);
    }
  }, []);

  return (
    // Attach the ref to a DOM element
    <div ref={myRef}>
      This div uses the useRef hook.
    </div>
  );
}

export default UseRefHook;
