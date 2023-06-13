import { createBrowserRouter } from "react-router-dom";
import {
    EXERCISES_ROUTE,
    EXERCISE_ROUTE, 
    LOGIN_ROUTE, 
    REGISTRATION_ROUTE, 
    RESULTS_ROUTE,
    USER_ROUTE
} from "./utils/consts"

export const authRoutes = createBrowserRouter([
    {
        path: USER_ROUTE + '/:id',
        async lazy() {
            const { User } = await import('./pages/User');
            return { Component: User };
        },
    },
    {
        path: RESULTS_ROUTE,
        async lazy() {
            const { Results } = await import('./pages/Results');
            return { Component: Results };
        },
    }
]);

export const publicRoutes = createBrowserRouter([
    {
        path: REGISTRATION_ROUTE,
        async lazy() {
            const { Registration } = await import('./pages/Registration/Registration');
            return { Component: Registration };
        }
    },
    {
        path: LOGIN_ROUTE,
        async lazy() {
            const { Login } = await import('./pages/Login');
            return { Component: Login };
        }
    },
    {
        path: EXERCISES_ROUTE,
        async lazy() {
            const { Exercises } = await import('./pages/Exercises/Exercises');
            return { Component: Exercises };
        }
    },
    {
        path: EXERCISE_ROUTE,
        async lazy() {
            const { Exercise } = await import('./pages/Exercise');
            return { Component: Exercise };
        }
    },

    // TODO: divide by auth
    {
        path: USER_ROUTE + '/:id',
        async lazy() {
            const { User } = await import('./pages/User');
            return { Component: User };
        },
    },
    {
        path: RESULTS_ROUTE,
        async lazy() {
            const { Results } = await import('./pages/Results');
            return { Component: Results };
        },
    },
    {
        path: "*",
        async lazy() {
            const { NotFound } = await import('./pages/NotFound');
            return { Component: NotFound };
        },
      },
]);