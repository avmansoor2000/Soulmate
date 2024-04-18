import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
    <div className="login-form">
      <h1>Login</h1>
        
        <div>
          
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" >Login</button>
        </div>
    </div>
    </div>
  );
};

export default Login;
