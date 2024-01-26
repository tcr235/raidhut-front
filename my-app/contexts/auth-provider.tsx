import authService from "@/service/auth.service";
import { ReactNode, createContext, useEffect } from "react";
import { useState } from "react";

export interface IUserData {
    userName: string;
    userEmail: string;
    userToken: string;
}

interface IAuthContext {
    userData: IUserData;
    setUserData: (userData: IUserData) => void;
}

const defaultValue = {
    userData: {
        userName: '',
        userEmail: '',
        userToken: '',
        },
    setUserData: () => {}
};

export const authContext = createContext<IAuthContext>(defaultValue);

const AuthProvider = ({ children } : { children:ReactNode }) => {
    const [userData, setUserData] = useState(defaultValue.userData);

    useEffect(() => {
        const userData = authService.getAuth();

        if (userData) {
            setUserData(userData);
        }

    }, []);

    useEffect(() => {
        authService.setAuth(userData);
    }, [userData.userEmail]);

    return (
        <authContext.Provider value={{ userData, setUserData }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;