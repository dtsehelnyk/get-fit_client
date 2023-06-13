import axios from '../utils/axios';
import { useContext, useEffect } from 'react';

import { UserContext, UserContextProvider } from '../context/UserContext';
import AppRouter from './AppRouter';

const App: React.FC = () => {
    const userContext = useContext(UserContext);

    useEffect(() => {
        axios.get('/commonExercises')
            .then((data) => {
                console.log(data.data);
            });
    }, []);

    return (
        <UserContextProvider>
            <AppRouter user={userContext?.user} />
        </UserContextProvider>
    );
}

export default App;