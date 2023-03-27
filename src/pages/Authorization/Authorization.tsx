import React, { useContext, useState } from 'react';

import { Context } from 'app';

const Authorization: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { store } = useContext(Context);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleLogin = () => store.login(email, password);

  const handleRegistration = () => store.registration(email, password);

  return (
    <div className='Authorization'>
      <input
        type='text'
        name='email'
        value={email}
        onChange={handleEmail}
        placeholder='Email'
        required
      />
      <input
        type='password'
        name='password'
        value={password}
        onChange={handlePassword}
        placeholder='Password'
        required
      />
      <button type='button' onClick={handleLogin}>Логин</button>
      <button type='button' onClick={handleRegistration}>Регистрация</button>
    </div>
  );
};

export default Authorization;
