import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UsersPage } from './UsersPage';

const queryClient = new QueryClient();

const renderUsersPage = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  );

describe('UsersPage tests', () => {
  it('Should render the page without users', () => {
    renderUsersPage();
  });

  it('Should render the page with users', () => {
    renderUsersPage();
  });
});
