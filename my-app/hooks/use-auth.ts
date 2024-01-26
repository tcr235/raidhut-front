import { authContext } from "@/contexts/auth-provider";
import { useContext } from "react";

function useAuth() {
    const context = useContext(authContext);
    return context;
}

export default useAuth;