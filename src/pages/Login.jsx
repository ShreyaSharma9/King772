// import React, { useState, useEffect } from 'react';


// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

 
//   useEffect(() => {
//     const registeredUser = localStorage.getItem('registeredUser');
//     if (registeredUser) {
//       const { username, password } = JSON.parse(registeredUser);
//       setUsername(username);
//       setPassword(password);
//     }
//   }, []);

//   const handleLogin = (e) => {
//     e.preventDefault();

    
//   };

//   return (
//     <div className="login-container">
//       <div className="box2">
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
