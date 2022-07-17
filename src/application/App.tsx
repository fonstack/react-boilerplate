import { StyledApp } from './styles';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter, routes } from '../navigation';

function App() {
  return (
    <BrowserRouter>
      <StyledApp>
        <AppRouter routes={routes} />
      </StyledApp>
    </BrowserRouter>
  );
}

export default App;
