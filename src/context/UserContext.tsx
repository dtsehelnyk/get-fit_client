import { createContext, useState } from "react";
import { User } from "../types/user";

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
