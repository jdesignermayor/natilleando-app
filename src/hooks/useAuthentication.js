import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function useAuthentication(){
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    function onLogOut(){
        dispatch({ type: "loggedOut" });
        navigate("/login");
    }

    function onLogIn(dataUser){
        dispatch({ type: "loggedIn", user: { ...dataUser } });
        navigate("/dashboard");
    }

    return {
        onLogOut,
        onLogIn
    }

}

