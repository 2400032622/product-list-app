import React, { useState } from 'react';

const productsData = [
  { name: 'Notebook', price: 10, category: 'Stationery' },
  { name: 'Backpack', price: 40, category: 'Bags' },
  { name: 'Pen', price: 2, category: 'Stationery' },
  { name: 'Laptop', price: 800, category: 'Electronics' },
  { name: 'Headphones', price: 50, category: 'Electronics' },
];

const categories = ['All', 'Stationery', 'Bags', 'Electronics'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Product List</h2>

      <div>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: '5px',
              backgroundColor: selectedCategory === category ? '#ddd' : '#fff',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <strong>{product.name}</strong> - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
