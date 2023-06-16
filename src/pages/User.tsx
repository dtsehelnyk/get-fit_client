import React, { useContext } from "react";
import { UserContext, UserContextProvider } from "../context/UserContext";
import Intro from "../components/Intro";

export const User: React.FC = () => {
    const userContext = useContext(UserContext);

    console.log(userContext);
    
    return (
        <div>
            <Intro title={'User title'} />
            text
        </div>
    );
};
