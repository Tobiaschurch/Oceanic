import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();

    const { mutate: loginUser, isPending: isLoading } = useMutation({
        mutationKey: ['app-login'],
        mutationFn: ({ member_no }) => login({ member_no }),

        onSuccess: (data) => {
            console.log("Data:", data);

            const { isLoggedIn, data: {
                    STATCODE: statusCode,
                    STATMSG: message,
                    data: userData,
                }
            } = data;

            if(statusCode == "ok") {

                toast.success(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
    
                // Set user data in global state
                setIsAuthenticated(isLoggedIn);
                queryClient.setQueryData(['user'], userData);
    
                localStorage.setItem('isloggedIn', JSON.stringify(isLoggedIn));
    
                // Navigate to dashboard
                setTimeout(() => {
                    navigate('/dashboard', { replace: true });
                }, 2000);
            }

            if(statusCode == "failed") {
                toast.error(message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        },

        onError: (error) => {
            toast.error("Unable to login", {
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
        loginUser, 
        isLoading 
    };
}
