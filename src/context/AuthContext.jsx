import { useContext, createContext, useReducer } from "react";

const AuthContext = createContext();

function authReducer(state, action) {
  switch (action.type) {
    case "loggedIn": {
      return {
        isLoggedIn: true,
        user: action?.user,
      };
    }
    case "loggedOut": {
      return {
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: null,
  });

  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
{  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;}
}

export { AuthProvider, useAuth };