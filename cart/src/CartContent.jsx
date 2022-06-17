import React, { useEffect, useState } from 'react';
import { login, jwt } from './cart';

const CartContent = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    login('sally', '123');
    return jwt.subscribe(val => setToken(val ?? ''));
  }, []);

  return <div>jwt: {token}</div>;
};

export default CartContent;
