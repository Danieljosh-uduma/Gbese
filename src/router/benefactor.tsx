import { Navigate, Outlet } from "react-router-dom";
import { useType } from "../hooks/useType";
import '../App.css'
// import Sidebar from "../components/Sidebar/Sidebar";


export default function BenefactorRoute() {
    const user = useType()

    return user?.userType === 'benefactor'? (
        <main className="ben-main">
            <section>
                {/* <Sidebar /> */}
                <Outlet />
            </section>
        </main>
    ): user?.userType !== null? <Navigate to='/dashboard/v1' />
     : <Navigate to='/' />
}
