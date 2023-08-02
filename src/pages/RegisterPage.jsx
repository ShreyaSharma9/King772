import React, { useState } from 'react';
import './RegisterPage.css';
import logo from '../assets/logo.png';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    localStorage.setItem('registeredUser', JSON.stringify({ username, password }));

    
    window.location.href = '/dashboard';
  };

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
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />

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

// LoginPage.js

// import React, { useState } from 'react';

// import { useHistory } from 'react-router-dom';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = async (e) => {
//     e.preventDefault();

  
//     if (!username || !password) {
//       alert('Please fill in both username and password.');
//       return;
//     }

//     try {
      
//       const response = await fetch('https://auth-backend-93eo.onrender.com/api/user/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
        
//         history.push('/dashboard');
//       } else {
        
//         alert('Login failed. Please check your credentials and try again.');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Login failed. Please try again later.');
//     }
//   };

//   return (
//     <div className="register-container">
//       <div className="box">
//         <h2>Login to King772</h2>

//         <form onSubmit={handleLogin}>
//           <div className="text-section">
//             <h6>Username</h6>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//             <h6>Password</h6>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

//             <button type="submit" className="login-btn">
//               Log In
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

