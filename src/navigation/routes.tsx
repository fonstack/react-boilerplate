import { Navigate, RouteObject } from 'react-router';
import { EmptyLayout } from '../layouts';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';

import { UserDetailsPage, UsersPage } from '../pages';
import { Paths } from './paths';
import { ProtectedRoute } from './ProtectedRoute';

const routes: RouteObject[] = [
  {
    element: <BasicLayout />,
    children: [
      {
        path: Paths.USERS,
        element: <UsersPage />,
      },
      {
        path: Paths.USER_DETAILS,
        element: <ProtectedRoute children={<UserDetailsPage />} />,
      },
    ],
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: Paths.LOGIN,
        element: <>Login</>,
      },
      {
        path: Paths.REGISTER,
        element: <>Register</>,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to={Paths.USERS} />,
  },
];

export { routes };
