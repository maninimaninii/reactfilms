import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/Login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Mot de passe ou email incorrect');
    }
  };

  return (
    <div className='login'>
      <div className="logincontainer">
        <h1>Se connecter</h1>
        <div className="loginfields">
          <input type="email" placeholder='votrenom@random.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Continuer</button>
        </div>
        {error && <p className="error">{error}</p>}
        <div className='loginagree'>
          <input type="checkbox" name='' id='' />
          <p>En continuant, j'accepte les termes et conditions</p>
        </div>
      </div>
    </div>
  );
};
