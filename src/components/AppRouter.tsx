import { RouterProvider } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { User } from '../context/UserContext';

type AppRouterProps = Record<'user', User | null | undefined>;

const AppRouter: React.FC<AppRouterProps> = (props) => {
  // TODO: divide roles
  const isAuth = 0;
  const routes = isAuth ? authRoutes : publicRoutes;

  return (
    <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
  );
}

export default AppRouter;
