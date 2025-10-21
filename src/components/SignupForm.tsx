import { useState } from 'react';
import { Link } from 'react-router-dom';
import Socials from '@components/Socials';
import EyeIcon from '@assets/icons/eye.svg?react';

const SignupForm = () => {
  const [LoginForm, setLoginForm] = useState({
    email: '',
    user: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isPassShow, setIsPassShow] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...LoginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">Registro</h2>

      {/* Form fields */}
      <label className="auth-form__input mt-5 my-2">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={LoginForm.email}
          onChange={handleChange}
          autoComplete="email"
          required
        />
      </label>
      <label className="auth-form__input my-2">
        <input
          type="text"
          placeholder="Nombre de usuario"
          name="user"
          value={LoginForm.user}
          onChange={handleChange}
          autoComplete="username"
          required
        />
      </label>
      <label className="auth-form__input my-2">
        <input
          type="tel"
          placeholder="Número de celular"
          name="phone"
          value={LoginForm.phone}
          onChange={handleChange}
          autoComplete="tel"
          required
        />
      </label>
      <label className="auth-form__input my-2">
        <input
          type={isPassShow ? 'text' : 'password'}
          placeholder="Contraseña"
          name="password"
          value={LoginForm.password}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={() => setIsPassShow((prev) => !prev)}>
          <EyeIcon />
        </button>
      </label>
      <label className="auth-form__input my-2">
        <input
          type={isPassShow ? 'text' : 'password'}
          placeholder="Confirmar contraseña"
          name="confirmPassword"
          required
        />
        <button type="button" onClick={() => setIsPassShow((prev) => !prev)}>
          <EyeIcon />
        </button>
      </label>

      {/* Actions */}
      <button className="auth-form__submit" type="submit">
        Iniciar sesión
      </button>
      <Link className="auth-form__link" to="/login">
        Inicia sesión aquí!
      </Link>

      {/* Socials */}
      <Socials />
    </form>
  );
};

export default SignupForm;
