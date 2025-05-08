import { Navigate, Outlet } from "react-router-dom";
import { useType } from "../hooks/useType";
import Sidebar from "../components/Sidebar/Sidebar";
import '../App.css'


export default function BenefactorRoute() {
    const userType = useType()

    return userType === 'benefactor'? (
        <main className="ben-main">
            <Sidebar />
            <section>
                <Outlet />
            </section>
        </main>
    ): userType !== null? <Navigate to='/dashboard/v2' />
     : <Navigate to='/' />
}
