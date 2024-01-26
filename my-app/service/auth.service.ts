import { IUserData } from "@/contexts/auth-provider";
import { destroyCookie, parseCookies, setCookie } from "nookies";

class AuthService {
    setAuth(data: IUserData) {
        setCookie(null, 'authToken', data.userToken, {path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        secure: true,})
        
        setCookie(null, 'authUserName', data.userName, {path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        secure: true,})

        setCookie(null, 'authUserEmail', data.userEmail, {path: '/',
        maxAge: 60 * 60 * 24 * 30, // 30 days
        secure: true,})
    }

    deleteAuth() {
        destroyCookie(null, 'authToken');
        destroyCookie(null, 'authUserName');
        destroyCookie(null, 'authUserEmail');
    }

    getAuth() {
      const cookies = parseCookies();

      if (cookies.authToken && cookies.authUserName && cookies.authUserEmail) {
        return {
          userToken: cookies.authToken,
          userName: cookies.authUserName,
          userEmail: cookies.authUserEmail
        } as IUserData;
      }

      return null;

    }
}

export default new AuthService();