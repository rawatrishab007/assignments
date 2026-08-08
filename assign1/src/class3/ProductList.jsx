import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  // Fixed: Added () to execute useNavigate
  const navi = useNavigate();

  const products = [
    { id: 1, name: "iPhone 16", price: 80000 },
    { id: 2, name: "Samsung S26", price: 70000 },
    { id: 3, name: "OnePlus 14", price: 50000 }
  ];

  function fun1(id) {
    navi(`/p/${id}`);
  }

  return (
    <div>
      <ul>
        {products.map((a) => (
          <li key={a.id} onClick={() => fun1(a.id)} style={{ cursor: 'pointer' }}>
            {a.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;