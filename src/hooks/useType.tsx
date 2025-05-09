import { createContext, useContext } from "react";
import { useHook } from "../types/User";

const TypeContext = createContext<useHook>({} as useHook)

// eslint-disable-next-line react-refresh/only-export-components
export function useType() {
    const hook = useContext(TypeContext)
        if (!hook) {
            console.error('useAuth must be use inside the AuthProvider')
        }
        return hook
}

export default TypeContext
