import React, { useEffect, useState } from 'react';
import { jwt } from './cart';
import Login from './Login';
import MiniCart from './MiniCart';

const CartContent = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    return jwt.subscribe(v => setToken(v ?? ''));
  });

  return (
    <div>
      <div>jwt: {token}</div>
      <Login />
      <MiniCart />
    </div>
  );
};

export default CartContent;
