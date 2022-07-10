import { UsersService } from '../../api';
import { UserCard } from '../../components';
import { StyledDashboardPage } from './styles';

const DashboardPage = () => {
  const { data: users, isLoading: loadingUsers } = UsersService.useUsers();

  return (
    <StyledDashboardPage>
      <h1>Dashboard Page</h1>
      {loadingUsers ? (
        <p>Loading users...</p>
      ) : (
        <div>
          {users?.map((user) => (
            <UserCard key={user.id} {...user} marked={user.isGmailUser} />
          ))}
        </div>
      )}
    </StyledDashboardPage>
  );
};

export { DashboardPage };
