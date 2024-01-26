import AuthProvider from "@/contexts/auth-provider";

export function providers({ children } : { children:React.ReactNode }) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>

    );
}