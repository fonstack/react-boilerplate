import { QueryClient, QueryClientProvider } from 'react-query';
import { DashboardPage } from './pages';
import { StyledApp } from './styles';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StyledApp>
        <DashboardPage />
      </StyledApp>
    </QueryClientProvider>
  );
}

export default App;
