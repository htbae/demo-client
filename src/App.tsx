import AlertInitializer from './components/commons/Alert/AlertInitializer';
import { RoutesContainer } from './routes/RoutesContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <ComponentInitializer>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <RoutesContainer isSignIn={false} />
      </BrowserRouter>
    </ComponentInitializer>
  );
};

const ComponentInitializer = ({ children }: { children: React.ReactNode }) => {
  return <AlertInitializer>{children}</AlertInitializer>;
};

export default App;
