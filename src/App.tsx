import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/App.routes';
import '@assets/styles/main.css';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
