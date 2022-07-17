import { StyledUserCard } from './styles';
import { UserCardProps } from './types';

const UserCard = ({ username, email, image, isVIP }: UserCardProps) => {
  return (
    <StyledUserCard isVIP={isVIP}>
      {isVIP && <span role={'alert'}>VIP User</span>}
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <img src={image} alt={username} />
    </StyledUserCard>
  );
};

export { UserCard };
