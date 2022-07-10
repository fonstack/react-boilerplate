import { StyledUserCard } from './styles';
import { UserCardProps } from './types';

const UserCard = ({ username, email, image, marked }: UserCardProps) => {
  return (
    <StyledUserCard marked={marked}>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <img src={image} alt={username} />
    </StyledUserCard>
  );
};

export { UserCard };
