import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect } from 'react';
import { authMe } from '../utils/axios';

const AppRouter: React.FC = () => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    try {
      const getUser = async () => {
        const { data } = await authMe();
        console.log('__user data', data);
              
        if (data) {
          userContext?.setUser(data);
        } else {
          return <Navigate to={'/'} />
        }
      }

      getUser();   
    } catch (err) {}     
  }, []);

  const routes = userContext?.user
    ? createBrowserRouter(authRoutes)
    : createBrowserRouter(publicRoutes);
  
  return (
    <RouterProvider router={routes} fallbackElement={<p>Loading...</p>} />
  );
}

export default AppRouter;
