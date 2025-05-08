import { Outlet } from "react-router"
import { useAuth } from '../hooks/useAuth';
import TypeContext from "../hooks/useType";
// import SplashScreen from "../pages/SplashScreen/SplashScreen";

// import { Navigate } from 'react-router';

export default function DashboardRoute() {
    const { user } = useAuth()
    const userType = user? user.type : null

    return (
        <TypeContext.Provider value={userType}>
            {/* <SplashScreen /> */}
            <Outlet />
        </TypeContext.Provider>
        
    )
}