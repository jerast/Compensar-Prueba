import { Link } from 'react-router-dom';
import Header from '@components/Header';
import LoginImage from '@assets/images/login-image.avif';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <>
      <Header />
      <main className="auth">
        <div className="auth-info">
          <div>
            <h1 className="auth-info__title">Bienvenido</h1>
            <span className="auth-info__subtitle">Ingresa y disfruta</span>
            <span className="auth-info__description">
              Si aún no tienes una cuenta
              <br />
              puedes{' '}
            </span>
            <Link className="auth-info__link" to="/signup">
              Registrarte aquí!
            </Link>
          </div>
          <img className="auth-info__img" src={LoginImage} aria-hidden />
        </div>

        <LoginForm />
      </main>
    </>
  );
};

export default Login;
