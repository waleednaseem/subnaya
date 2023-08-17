

import React, { useState } from 'react';

export default function Index() {
  const [products, setProducts] = useState([
    { name: 'Product 1', qty: 2, price: 20 },
    { name: 'Product 2', qty: 3, price: 30 },
    
  ]);

  const calculateSubtotal = (qty, price) => {
    return qty * price;
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + calculateSubtotal(product.qty, product.price), 0);
  };

  const updateQty = (index, newQty) => {
    const updatedProducts = [...products];
    updatedProducts[index].qty = newQty;
    setProducts(updatedProducts);
  };

  return (
    <div className="AddtoCardTable">
      <table className='border border-black w-full'>
        <thead>
          <tr className='border border-black'>
            <th className='border border-black'>Product Name</th>
            <th className='border border-black'>Qty</th>
            <th className='border border-black'>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className='border border-black'>
              <td className='border border-black flex gap-1 justify-center'>
                <img className='w-20 h-20' src='images/brand-1.jpg' alt={`Product ${index}`} />
                <p>{product.name}</p>
              </td>
              <td className='border border-black'>
                <input
                  type='number'
                  value={product.qty}
                  onChange={(e) => updateQty(index, parseInt(e.target.value))}
                />
              </td>
              <td className='border border-black'>{calculateSubtotal(product.qty, product.price)}</td>
            </tr>
          ))}
          <tr className='border border-black'>
            <td className='border border-black'></td>
            <td className='border border-black'><strong>Total:</strong></td>
            <td className='border border-black'>{calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
