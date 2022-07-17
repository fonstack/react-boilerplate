import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { UsersService } from '../../api';
import { Paths } from '../../navigation';
import { StyledUserDetailsPage } from './styles';

const useUser = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();

  const userId = Number(id);

  if (!id || isNaN(userId)) navigate(Paths.USERS);

  return UsersService.useUser(userId);
};

const UserDetailsPage = () => {
  const { data: user, isLoading: loadingUser } = useUser();

  if (user === null) return <Navigate to={Paths.USERS} />;
  console.log(user);

  return (
    <StyledUserDetailsPage>
      <h1>User Details page</h1>
      {loadingUser ? (
        <p>Loading user details...</p>
      ) : (
        <div className="user-details">
          <img src={user?.image} alt={user?.username} />
          <p>Username: {user?.username}</p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone}</p>
          <p>Website: {user?.website}</p>
        </div>
      )}
    </StyledUserDetailsPage>
  );
};

export { UserDetailsPage };
