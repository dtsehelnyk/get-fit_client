import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { UserContextProvider } from '../context/UserContext';
import AppRouter from './AppRouter';

const App: React.FC = () => (
  <UserContextProvider>
    <AppRouter />
  </UserContextProvider>
);

export default App;