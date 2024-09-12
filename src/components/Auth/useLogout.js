import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

export function useLogout() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const { mutate: logoutUser, isPending: isLoading } = useMutation({
        mutationKey: ['app-logout'],
        mutationFn: async () => {
            return;
        },
        onSuccess: () => {

            localStorage.removeItem('isloggedIn');
            setIsAuthenticated(false);
            
            queryClient.removeQueries(['user']);
            
            // Redirect to sign-in page
            navigate('/sign-in', { replace: true });

        },
        onError: () => {
            toast.error("Error logging out", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        },
    });

    return { 
        logoutUser, 
        isLoading 
    };
}
