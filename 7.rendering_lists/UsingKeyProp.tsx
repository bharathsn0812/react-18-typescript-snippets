import React from 'react';

// Component to demonstrate the usage of the key prop
const UsingKeyProp: React.FC = () => {
  // An array of items to render
  const items = ['Dog', 'Cat', 'Rabbit'];

  return (
    <div>
      <h2>Using the key Prop</h2>
      <ul>
        {/* Use the index as a key for each item */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsingKeyProp;
