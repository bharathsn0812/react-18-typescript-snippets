import React from 'react';

// Component to demonstrate the importance of keys in lists
const KeysInLists: React.FC = () => {
  // An array of items to render
  const items = [
    { id: 1, name: 'Carrot' },
    { id: 2, name: 'Lettuce' },
    { id: 3, name: 'Spinach' }
  ];

  return (
    <div>
      <h2>Keys in Lists</h2>
      <ul>
        {/* Use a unique identifier for each item as the key */}
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeysInLists;
