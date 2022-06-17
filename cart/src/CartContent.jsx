import React, { useEffect, useState } from 'react';
import { jwt } from './cart';
import Login from './Login';

const CartContent = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    return jwt.subscribe(v => setToken(v ?? ''));
  });

  return (
    <div>
      <div>jwt: {token}</div>
      <Login />
    </div>
  );
};

export default CartContent;
