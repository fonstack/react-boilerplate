import { UsersService } from '../../api';
import { UserCard } from '../../components';
import { StyledUsersPage } from './styles';

const UsersPage = () => {
  const { data: users, isLoading: loadingUsers } = UsersService.useUsers();

  return (
    <StyledUsersPage>
      <h1>Users Page</h1>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <div data-testid={'users-grid-test-id'}>
          {users?.map((user) => (
            <UserCard key={user.id} {...user} isVIP={user.isGmailUser} />
          ))}
        </div>
      )}
    </StyledUsersPage>
  );
};

export { UsersPage };
