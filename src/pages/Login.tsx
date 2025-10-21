import { Link } from 'react-router-dom';
import Header from '@components/Header';
import LoginImage from '@assets/images/login-image.avif';
import FBIcon from '@assets/icons/facebook.svg?react';
import AppleIcon from '@assets/icons/apple.svg?react';
import GoogleIcon from '@assets/icons/google.svg?react';
import EyeIcon from '@assets/icons/eye.svg?react';

const Login = () => {
  return (
    <>
      <Header />
      <main className="login">
        <div className="login-info">
          <div>
            <h1 className="login-info__title">Bienvenido</h1>
            <span className="login-info__subtitle mb-14">Ingresa y disfruta</span>
            <span className="login-info__description">
              Si aún no tienes una cuenta
              <br />
              puedes{' '}
            </span>
            <Link className="login-info__link" to="/signup">
              Registrarte aquí!
            </Link>
          </div>
          <img className="login-info__img" src={LoginImage} aria-hidden />
        </div>

        <form className="login-form">
          <h2 className="login-form__title">Iniciar sesión</h2>
          <label className="login-form__input">
            <input type="text" placeholder="Email o nombre de usuario" />
          </label>
          <label className="login-form__input">
            <input type="password" placeholder="Contraseña" />
            <button type="button">
              <EyeIcon />
            </button>
          </label>
          <button className="login-form__action" type="button">
            Olvidé mi contraseña
          </button>
          <button className="login-form__submit" type="submit">
            Iniciar sesión
          </button>
          <Link className="login-form__link" to="/signup">
            Registrarte aquí!
          </Link>
          <span className="login-form__span">o continúa con</span>
          <div className="login-form__socials">
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

export default Login;
