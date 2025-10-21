import { Link } from 'react-router-dom';
import Header from '@components/Header';
import LoginImage from '@assets/images/login-image.avif';
import SignupForm from '@/components/SignupForm';

const Signup = () => {
  return (
    <>
      <Header />
      <main className="auth">
        <div className="auth-info">
          <div>
            <h1 className="auth-info__title">Regístrate</h1>
            <span className="auth-info__subtitle">
              te invitamos a crear <br /> tu cuenta
            </span>
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

        <SignupForm />
      </main>
    </>
  );
};

export default Signup;
