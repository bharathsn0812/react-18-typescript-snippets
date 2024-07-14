import React from 'react';

// Define the type for the data item
interface Item {
  id: number;
  name: string;
}

// Define the type for the component props
interface ItemProps {
  item: Item;
}

// Component to render a single item
const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return <li>{item.name}</li>;
};

// Component to demonstrate mapping data to components
const MappingDataToComponents: React.FC = () => {
  // An array of items to render
  const items: Item[] = [
    { id: 1, name: 'Table' },
    { id: 2, name: 'Chair' },
    { id: 3, name: 'Lamp' }
  ];

  return (
    <div>
      <h2>Mapping Data to Components</h2>
      <ul>
        {/* Map over the items array and render each item using ItemComponent */}
        {items.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default MappingDataToComponents;
