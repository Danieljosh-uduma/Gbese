import { createContext, useContext } from "react";

const TypeContext = createContext<'benefactor'| 'beneficiary' | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useType() {
    const hook = useContext(TypeContext)
        if (!hook) {
            console.error('useAuth must be use inside the AuthProvider')
        }
        return hook
}

export default TypeContext
