import { useState } from 'react';
import { Link } from 'react-router-dom';
import Socials from '@components/Socials';
import EyeIcon from '@assets/icons/eye.svg?react';
import { login } from '@services/auth.service';
import { toast } from 'sonner';
import useAppStore from '@/store/app.store';

const LoginForm = () => {
  const setLogin = useAppStore((state) => state.login);
  const [isPassShow, setIsPassShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [LoginForm, setLoginForm] = useState({
    emailOrUser: '',
    password: ''
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

    // Submit login
    setIsLoading(true);
    const response = await login(LoginForm);
    setIsLoading(false);

    // Handle error response
    if (!response.ok) {
      toast.error(response.message || 'Error al iniciar sesión');
      return;
    }

    // Set user in store
    setLogin(response.data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-form__title">Iniciar sesión</h2>

      {/* Form fields */}
      <label className="auth-form__input my-5">
        <input
          type="text"
          placeholder="Email o nombre de usuario"
          name="emailOrUser"
          value={LoginForm.emailOrUser}
          onChange={handleChange}
          required
        />
      </label>
      <label className="auth-form__input my-5">
        <input
          type={isPassShow ? 'text' : 'password'}
          placeholder="Contraseña"
          name="password"
          value={LoginForm.password}
          onChange={handleChange}
          required
        />
        <button type="button" onClick={() => setIsPassShow(!isPassShow)}>
          <EyeIcon />
        </button>
      </label>

      {/* Actions */}
      <button className="auth-form__action" type="button">
        Olvidé mi contraseña
      </button>
      <button className="auth-form__submit" type="submit" disabled={isLoading}>
        Iniciar sesión
      </button>
      <Link className="auth-form__link" to="/signup">
        Regístrate aquí
      </Link>

      {/* Socials */}
      <Socials />
    </form>
  );
};

export default LoginForm;
