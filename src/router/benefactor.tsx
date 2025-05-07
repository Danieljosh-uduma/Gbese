import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";


export default function BenefactorRoute() {
    return (
        <main>
            <Sidebar />
            <Outlet />
        </main>
    )
}
