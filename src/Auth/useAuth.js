/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import AuthContext from './context';
import AuthStorage from './storage';
const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logOut = () => {
    setUser(undefined);
    AuthStorage._removeData();
  };
  const login = result => {
    setUser(result.user);
    AuthStorage._storeData(result.user);
  };

  const register = result => {
    setUser(result.user);
    AuthStorage._storeData(result.user);
  };

  return { user, setUser, logOut, register, login };
};

export default useAuth;
