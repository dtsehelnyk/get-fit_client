import { createContext, useState } from "react";

export type User = {
  username: string,
  email: string,
  measure: string,
  language: string,
  canTrain: string[],
  themeId?: string,
  avatarImg?: string,
  weight?: number,
}

export type UserContextType = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
}

type UserContextProviderProp = {
  children: React.ReactNode,
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProp) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext.Provider value={{user, setUser}}>
    {children}
  </UserContext.Provider>;
}
