// COMMON
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

// ROUTES

export const BASE_ROUTE = '/';
export const REST_ROUTE = '*';

export const LOGIN_ROUTE = 'login';
export const REGISTRATION_ROUTE = 'registration';
export const USER_ROUTE = 'user/:id';

export const EXERCISES_ROUTE = 'exercises';
export const EXERCISE_ROUTE = 'exercises/:id';
export const RESULTS_ROUTE = 'results';

// NAMES
export const GET_FIT = 'GetFit';

// MENUS
export const MENU = 'MENU';
export const HEADER_NAV_PAGES = ['Exercises', 'Diets', 'More'] as const;
export const PROFILE_LINKS = ['Profile', 'Results', 'Logout'] as const;

// VALIDATION
export const ENTER_EMAIL = 'Enter your email';
export const ENTER_PASSwORD = 'Enter your password';