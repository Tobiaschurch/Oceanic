import React, { createContext, useContext } from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: isAuthenticated, isLoading, error } = useQuery({
    queryKey: ['isloggedIn'],
    queryFn: () => {
      try {
        const isAuthenticated = localStorage.getItem("isloggedIn");
        return isAuthenticated ? JSON.parse(isAuthenticated) : null;

      } catch (err) {

        return null;
      }
    },
  });

  const setIsAuthenticated = (isAuthenticated) => {
    try {

      localStorage.setItem("isloggedIn", JSON.stringify(isAuthenticated));
      queryClient.setQueryData(['isloggedIn'], isAuthenticated);

    } catch (err) {

      console.error('Error setting authentication state:', err);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
