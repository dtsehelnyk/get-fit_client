import {
  BASE_ROUTE,
  EXERCISES_ROUTE,
  EXERCISE_ROUTE, 
  LOGIN_ROUTE, 
  REGISTRATION_ROUTE, 
  REST_ROUTE, 
  RESULTS_ROUTE,
  USER_ROUTE
} from "./utils/consts";

export const authRoutes = [
  {
    path: BASE_ROUTE,
    async lazy() {
      const { User } = await import('./pages/User');
      return { Component: User };
    },
  },
  {
    path: USER_ROUTE,
    async lazy() {
      const { User } = await import('./pages/User');
      return { Component: User };
    },
  },
  {
    path: RESULTS_ROUTE,
    exact: true,
    async lazy() {
      const { Results } = await import('./pages/Results');
      return { Component: Results };
    },
  },
  {
    path: EXERCISES_ROUTE,
    exact: true,
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
  {
    path: REST_ROUTE,
    async lazy() {
      const { NotFound } = await import('./pages/NotFound');
      return { Component: NotFound };
    },
  },
];

export const publicRoutes = [
  {
    path: REGISTRATION_ROUTE,
    exact: true,
    async lazy() {
      const { Registration } = await import('./pages/Registration/Registration');
      return { Component: Registration };
    }
  },
  {
    path: LOGIN_ROUTE,
    exact: true,
    async lazy() {
      const { Login } = await import('./pages/Login');
      return { Component: Login };
    }
  },
  {
    path: EXERCISES_ROUTE,
    exact: true,
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
  {
    path: REST_ROUTE,
    async lazy() {
      const { Login } = await import('./pages/Login');
      return { Component: Login };
    },
  },
];
