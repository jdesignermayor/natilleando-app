import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function useAuthentication(){
    const { dispatch } = useAuth();
    const navigate = useNavigate();

    const onLogOut = () => {
      dispatch({ type: "loggedOut" });
      navigate("/login");
    };

    const onLogIn = (dataUser) => {
      const role = dataUser?.role;
      dispatch({ type: "loggedIn", user: { ...dataUser } });
      role == 1 ? navigate("/admin") : navigate("/dashboard");
    };

    return {
        onLogOut,
        onLogIn
    }
}

