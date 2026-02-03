'use client';
import { useState, useEffect } from 'react';

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log("Inputs updated:", { name, email });
  }, [name, email]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = { name, email };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        console.log("Success Login from Server");
        alert("Login Successful!");
      } else {
        console.log("Login Failed");
        alert("Login Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
    }
  };

  return (
    // Restored your original 'hidden p-5' styling
    <div className='loginformclass hidden p-5'>
      <form onSubmit={handleLogin} className='p-3'>
        <input 
          type="text" 
          placeholder="Type Name..." 
          name="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
          className="p-2 bg-green-100" 
        />

        <input 
          type="email" 
          placeholder="Type Email..." 
          name="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
          className="p-2 bg-green-100" 
        />

        <button type='submit' className="click_login p-2 bg-blue-100">
          Click Here To Login
        </button>
      </form>
    </div>
  );
}