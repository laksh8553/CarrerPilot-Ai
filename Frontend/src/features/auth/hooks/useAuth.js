import { useContext,useEffect } from "react";
import { AuthContext } from "../auth.context.jsx";
import {login,register,logout,getMe} from '../services/auth.api.js';

export const useAuth = () => {

    const Context = useContext(AuthContext);
    const {user, setUser, loading, setLoading} = Context;

    const handleLogin = async ({email, password}) => {
        setLoading(true);
        try{
        const data =await login({email, password});
        setUser(data.user);   
        }catch(error){
            console.error('Login failed:', error);
        }finally{
        setLoading(false);
        }
    }

    const handleRegister = async ({username,email, password}) => {
        setLoading(true);
        try{
        const data = await register({username,email, password});
        setUser(data.user);
        }catch(error){
            console.error('Register failed:', error);
        }finally{
        setLoading(false);
        }
    }
    
    const handleLogout = async () => {
        setLoading(true);
        try{
        const data = await logout();
        setUser(null);
        }catch(error){
            console.error('Logout failed:', error);
        }finally{
        setLoading(false);
        }
    }

    useEffect(()=>{
        const getAndSetUser = async () => {
          try {
            const data = await getMe();
            setUser(data);
          } catch (error) {
            if (error?.response?.status === 401) {
              setUser(null); // User simply isn't logged in
            } else {
              console.error("Unexpected error:", error);
            }
          } finally {
            setLoading(false);
          }
        };
        getAndSetUser();

    },[]);

    return{handleLogin, handleRegister, handleLogout, user, loading};
}