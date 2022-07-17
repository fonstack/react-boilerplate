import { useNavigate } from 'react-router-dom';
import { parsePathWithParams } from '../../navigation';
import { Paths } from '../../navigation/paths';
import { StyledUserCard } from './styles';
import { UserCardProps } from './types';

const UserCard = ({ id, username, email, image, isVIP }: UserCardProps) => {
  const navigate = useNavigate();

  return (
    <StyledUserCard isVIP={isVIP} onClick={() => navigate(parsePathWithParams(Paths.USER_DETAILS, { id }))}>
      {isVIP && <span>VIP User</span>}
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <img src={image} alt={username} />
    </StyledUserCard>
  );
};

export { UserCard };
