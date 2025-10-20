import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/App.routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
