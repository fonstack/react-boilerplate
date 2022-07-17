import { useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import { Paths } from '..';

const ProtectedRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const isAuthenticated = true; // TODO: Implement auth service
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={Paths.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
