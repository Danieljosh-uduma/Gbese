import { Outlet } from "react-router"
import { useAuth } from '../hooks/useAuth';
import TypeContext from "../hooks/useType";
import { useState } from "react";
// import SplashScreen from "../pages/SplashScreen/SplashScreen";

// import { Navigate } from 'react-router';

export default function DashboardRoute() {
    const [showSidebar, setShowSidebar] = useState(false)
    const { user } = useAuth()
    const userType = user? user.type : null
    const BASE_URL = userType === 'benefactor'? '/dashboard/v2': userType === 'beneficiary'? '/dashboard/v1': '/'

    return (
        <TypeContext.Provider value={{userType, BASE_URL, showSidebar, setShowSidebar}}>
            {/* <SplashScreen /> */}
            <Outlet />
        </TypeContext.Provider>
        
    )
}