import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/App.routes';
import '@assets/styles/main.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
