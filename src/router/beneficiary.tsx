import { Navigate, Outlet } from "react-router-dom";
import { useType } from "../hooks/useType";
// import Sidebar from "../components/Sidebar/Sidebar";



export default function BeneficiaryRoute() {
    const userType = useType()

    return userType === 'beneficiary'? (
        <main>
            {/* <Sidebar /> */}
            <Outlet />
        </main>
    ): userType !== null? <Navigate to='/dashboard/v2' />
     : <Navigate to='/' />
}
