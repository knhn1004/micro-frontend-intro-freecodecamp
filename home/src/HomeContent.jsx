import React, { useState, useEffect } from 'react';
import { currency, getProducts } from './products';
import { addToCart, useLoggedIn } from 'cart/cart';

const HomeContent = () => {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  return (
    <div className="my-10 grid grid-cols-4 gap-5">
      {products.map(p => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{p.name}</a>
            </div>
            <div className="flex-end">{currency.format(p.price)}</div>
          </div>
          <div className="text-sm mt-4">{p.description}</div>
          {loggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 "
                onClick={() => addToCart(p.id)}
                id={`addtocart_${p.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeContent;
