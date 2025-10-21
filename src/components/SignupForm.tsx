import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { register } from '@/services/auth.service';
import Socials from '@components/Socials';
import EyeIcon from '@assets/icons/eye.svg?react';

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isPassShow, setIsPassShow] = useState(false);
  const [LoginForm, setLoginForm] = useState({
    email: '',
    user: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...LoginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent multiple submits
    if (isLoading) return;

    // Validate password match
    if (LoginForm.password !== LoginForm.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    // Submit registration
    setIsLoading(true);
    const response = await register(LoginForm);
    setIsLoading(false);

    // Handle error response
    if (!response.ok) {
      toast.error(response.message || 'Error al iniciar sesión');
      return;
    }

    // Successful registration
    toast.error('Registro exitoso!');
    navigate('/login');
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
          value={LoginForm.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={() => setIsPassShow((prev) => !prev)}>
          <EyeIcon />
        </button>
      </label>

      {/* Actions */}
      <button className="auth-form__submit" type="submit" disabled={isLoading}>
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
