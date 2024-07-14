import React from 'react';

// Component to demonstrate rendering a list
const RenderingLists: React.FC = () => {
  // An array of items to render
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h2>Rendering Lists</h2>
      <ul>
        {/* Map over the items array and render each item as a list element */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default RenderingLists;
