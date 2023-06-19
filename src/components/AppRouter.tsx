import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { UserContext } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { authMe } from '../utils/axios';

const AppRouter: React.FC = () => {
  const userContext = useContext(UserContext);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    try {
      const getUser = async () => {
        const { data } = await authMe();
        console.log('__user data', data);
              
        if (data) {
          userContext?.setUser(data);
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      }

      getUser();   
    } catch (err) {}     
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter(isAuth ? authRoutes : publicRoutes)}
      fallbackElement={<p>Loading...</p>}
    />
  );
}

export default AppRouter;
