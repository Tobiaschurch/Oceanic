import { useQueryClient } from "@tanstack/react-query";

export function getUserData() {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(["user"]);
    return data;
}
