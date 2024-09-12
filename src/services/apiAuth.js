const API_URL = import.meta.env.VITE_BASE_URL;


export async function login({ member_no }) {

    const response = await fetch(`${API_URL}/api/proxy`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
            member_number: member_no     
        }),
        redirect: "follow",
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(`${result.error || response.statusText}`);
    }

    return result;
}
