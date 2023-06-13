import React, { useContext } from "react";
import { Header } from "../components/header";
import { UserContext, UserContextProvider } from "../context/UserContext";

export const User: React.FC = () => {
    const userContext = useContext(UserContext);

    console.log(userContext);
    
    return (
        <div>
            <Header title={'User title'} content={'User content'} />
            text
        </div>
    );
};
