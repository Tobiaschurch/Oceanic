import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();


  // Redirect to /sign-in
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // Remove item from local storage and set authentication state
      localStorage.removeItem('isloggedIn');
      setIsAuthenticated(false);
      // Redirect to /sign-in
      navigate("/sign-in", { replace: true });
    }
  }, [isLoading, isAuthenticated, navigate, setIsAuthenticated]);

  // While loading, show a spinner
  if (isLoading) return <Spinner />;

 
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
