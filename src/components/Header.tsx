import useAppStore from '@/store/app.store';
import Logo from '@assets/icons/logo.svg?react';
import LogoutIcon from '@assets/icons/logout.svg?react';

const Header = () => {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);

  return (
    <header className="header">
      <Logo />
      {user && (
        <div className="header-user">
          Hola, {user?.user}
          <button onClick={logout}>
            <LogoutIcon />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
