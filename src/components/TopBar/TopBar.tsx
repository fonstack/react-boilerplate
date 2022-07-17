import { useNavigate } from 'react-router-dom';
import { Paths } from '../../navigation';
import { StyledTopBar } from './styles';

const TopBar = () => {
  const navigate = useNavigate();

  return (
    <StyledTopBar>
      <h3 onClick={() => navigate(Paths.USERS)}>Welcome!</h3>
    </StyledTopBar>
  );
};

export { TopBar };
