import { Link } from 'react-router-dom';
import Header from '@components/Header';
import LoginImage from '@assets/images/login-image.avif';
import FBIcon from '@assets/icons/facebook.svg?react';
import AppleIcon from '@assets/icons/apple.svg?react';
import GoogleIcon from '@assets/icons/google.svg?react';
import EyeIcon from '@assets/icons/eye.svg?react';

const Signup = () => {
  return (
    <>
      <Header />
      <main className="auth">
        <div className="auth-info">
          <div>
            <h1 className="auth-info__title">Regístrate</h1>
            <span className="auth-info__subtitle">te invitamos a crear <br /> tu cuenta</span>
            <span className="auth-info__description">
              Si ya tienes una cuenta
              <br />
              puedes{' '}
            </span>
            <Link className="auth-info__link" to="/login">
              Iniciar sesión aquí!
            </Link>
          </div>
          <img className="auth-info__img" src={LoginImage} aria-hidden />
        </div>

        <form className="auth-form">
          <h2 className="auth-form__title">Registro</h2>
          <label className="auth-form__input mt-5 my-2">
            <input type="email" placeholder="Email" />
          </label>
          <label className="auth-form__input my-2">
            <input type="text" placeholder="Nombre de usuario" />
          </label>
          <label className="auth-form__input my-2">
            <input type="number" placeholder="Número de celular" />
          </label>
          <label className="auth-form__input my-2">
            <input type="password" placeholder="Contraseña" />
            <button type="button">
              <EyeIcon />
            </button>
          </label>
          <label className="auth-form__input my-2">
            <input type="password" placeholder="Confirmar contraseña" />
            <button type="button">
              <EyeIcon />
            </button>
          </label>

          <button className="auth-form__submit" type="submit">
            Iniciar sesión
          </button>
          <Link className="auth-form__link" to="/login">
            Inicia sesión aquí!
          </Link>
          <span className="auth-form__span">o continúa con</span>
          <div className="auth-form__socials">
            <button type="button">
              <FBIcon />
            </button>
            <button type="button">
              <AppleIcon />
            </button>
            <button type="button">
              <GoogleIcon />
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
