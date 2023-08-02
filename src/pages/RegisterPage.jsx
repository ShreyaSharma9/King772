
import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import logo from '../assets/logo.png';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  useEffect(() => {
   
    const isUserLoggedIn = localStorage.getItem('registeredUser') !== null;

    if (isUserLoggedIn) {
    
      setRedirectToDashboard(true);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify({ username, password }));

    
    setRedirectToDashboard(true);
  };

  if (redirectToDashboard) {
    
    window.location.href = '/dashboard';
    return null; 
  }

  return (
    <div className="register-container">
      <div className="box">
        <img id="logo" src={logo} alt="Logo" />
        <h2>Welcome to King772</h2>

        <form onSubmit={handleRegister}>
          <div className="text-section">
            <h6>Your UserName</h6>
            <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <h6>Your Password</h6>
            <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;





