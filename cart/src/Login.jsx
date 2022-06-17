import React, { useState } from 'react';

import { login, useLoggedIn } from './cart';

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showlogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-500 bg-white text-black"
          style={{
            width: 300,
            top: 50,
            right: 100,
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={evt => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 w-full"
          />
          <input
            type="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 w-full mt-3"
          />
          <button
            className="bg-blue-500 text-white py-2 px-5 text-sm mt-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
