import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";



export default function BenefactorRoute() {
    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    )
}
